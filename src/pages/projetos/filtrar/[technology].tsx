import BackButton from '@/components/BackButton';
import { ContainerSection } from '@/components/Container';
import ErrorDisplay from '@/components/ErrorDisplay';
import Loading from '@/components/Loading';
import ProjectsGrid from '@/components/ProjectsGrid';
import ScrollLoad from '@/components/ScrollLoad';
import {
  addProjects,
  clearProjects,
  selectFilteredProjects,
} from '@/features/filteredProjectsSlice';
import { IProject } from '@/global/types';
import {
  filterProjects,
  serializeProjectsArray,
} from '@/utils/firebaseCollections';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface IProps {
  initialProjects: IProject[];
}

export default function ProjetosDeTecnologia({ initialProjects = [] }: IProps) {
  const dispatch = useDispatch();

  const router = useRouter();
  const { technology } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const { projects, lastProject, shouldFetchProjects } = useSelector(
    selectFilteredProjects
  );

  const lastProjectRef = useRef(lastProject);

  const getProjetos = async () => {
    if (shouldFetchProjects) {
      if (typeof technology === 'string' && technology.length) {
        const fetchedProjects = await filterProjects(
          technology,
          lastProjectRef
        );
        dispatch(addProjects(serializeProjectsArray(fetchedProjects)));
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(addProjects(initialProjects));
    lastProjectRef.current = lastProject;

    if (typeof technology === 'string' && technology.length > 0) {
      getProjetos();
    }

    return () => {
      dispatch(clearProjects());
    };
  }, [technology]);

  const pageTitle = `Projetos que utilizam ${technology ? technology : ' '}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content={`Confira os projetos que utilizam a tecnologia "${technology}"`}
        />
      </Head>
      <main>
        <Section>
          <Header>
            <BackButton />
            <h1>Projetos que utilizam {technology}</h1>
          </Header>
          <ScrollLoad onScrollEnd={getProjetos}>
            {isLoading ? (
              <Loading />
            ) : projects.length > 0 ? (
              <ProjectsGrid projects={projects} />
            ) : (
              <ErrorDisplay
                title='Nenhum projeto encontrado'
                message='Tente filtrar por outra tecnologia'
              />
            )}
          </ScrollLoad>
        </Section>
      </main>
    </>
  );
}

const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export function getStaticPaths() {
  const paths = [
    { params: { technology: 'HTML' } },
    { params: { technology: 'CSS' } },
    { params: { technology: 'TypeSctipt' } },
    { params: { technology: 'JavaScript' } },
    { params: { technology: 'React' } },
    { params: { technology: 'StyledComponents' } },
    { params: { technology: 'Firebase' } },
    { params: { technology: 'React router dom' } },
    { params: { technology: 'Next' } },
    { params: { technology: 'Webpack' } },
    { params: { technology: 'Tailwind' } },
    { params: { technology: 'Redux' } },
  ];

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<
  {},
  { technology: string }
> = async (context) => {
  if (context.params) {
    const { technology } = context.params;
    try {
      const fetchedProjects = await filterProjects(technology, { current: {} });
      return {
        props: {
          initialProjects: serializeProjectsArray(fetchedProjects),
        },
      };
    } catch (err) {}
  }
  return {
    props: {},
    notFound: true,
  };
};
