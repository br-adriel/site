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
import { db } from '@/firebase-config';
import { IProject } from '@/global/types';
import { fetchPage, serializeProjectsArray } from '@/utils/firebaseCollections';
import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function ProjetosDeTecnologia() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { technology } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const { projects, lastProject, shouldFetchProjects } = useSelector(
    selectFilteredProjects
  );

  const lastProjectRef = useRef(lastProject);
  const projectsCollectionRef = collection(db, 'projetos');

  const getProjetos = async () => {
    const q = query(
      projectsCollectionRef,
      where('tecnologias', 'array-contains', technology),
      orderBy('criado_em', 'desc'),
      startAfter(lastProjectRef.current),
      limit(10)
    );

    if (shouldFetchProjects) {
      const fetchedProjects = (await fetchPage(
        q,
        lastProjectRef
      )) as IProject[];
      dispatch(addProjects(serializeProjectsArray(fetchedProjects)));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    lastProjectRef.current = lastProject;

    if (typeof technology === 'string' && technology.length > 0) {
      getProjetos();
    }

    return () => {
      dispatch(clearProjects());
    };
  }, [technology]);

  if (!technology) return;
  return (
    <>
      <Head>
        <title>Projetos que utilizam {technology ? technology : ' '}</title>
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
