import { ContainerSection } from '@/components/Container';
import ErrorDisplay from '@/components/ErrorDisplay';
import Loading from '@/components/Loading';
import ProjectDetails from '@/components/ProjectDetails';
import { IProject } from '@/global/types';
import { getProject } from '@/utils/firebaseCollections';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IProps {
  projectObj?: IProject;
}

export default function Project({ projectObj }: IProps) {
  const initialProject: IProject = {
    criado_em: '',
    descricao: '',
    id: '',
    imagem: '',
    nome: '',
    repositorio: '',
    tecnologias: [],
    visualizacao: '',
  };
  const [project, setProject] = useState(initialProject);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetch = async () => {
      const fetchedProject = await getProject(id as string);
      setProject(fetchedProject as IProject);
      setIsLoading(false);
    };

    if (projectObj) {
      setProject(projectObj);
      setIsLoading(false);
    } else if (id) {
      fetch();
    }
  }, [id]);

  if (project === null)
    return (
      <>
        <Head>
          <title>Projeto não encontrado</title>
          <meta
            name='description'
            content='O projeto que você está procurando não existe'
          />
        </Head>
        <ErrorDisplay
          title='Projeto não encontrado'
          message='Verifique a URL e tente novamente'
        />
      </>
    );
  return (
    <>
      <Head>
        <title>{project.nome}</title>
        <meta
          name='description'
          content={`Veja mais detalhes sobre o projeto "${project.nome}"`}
        />
      </Head>
      <main>
        <ContainerSection>
          {isLoading ? <Loading /> : <ProjectDetails projeto={project} />}
        </ContainerSection>
      </main>
    </>
  );
}

export function getStaticPaths() {
  const paths = [
    { params: { id: '4kjbV0CjWUll6sjul0B1' } },
    { params: { id: '9w2VJSZ9Js6anNl1Gs4G' } },
    { params: { id: 'B4FVNFi1jAIuUa7BiK2j' } },
    { params: { id: 'BfHPwEs3UTV614We3IME' } },
    { params: { id: 'EfCQXrelVkfDR67oBcvA' } },
    { params: { id: 'EptySQUKtouYtXLue0wA' } },
    { params: { id: 'EtCfvcioyU3S88xqt4EJ' } },
    { params: { id: 'GKOMSCgu1JNmbCC1IEzT' } },
    { params: { id: 'L5HgHAafWWT1kcfQuHVV' } },
    { params: { id: 'L8mCOq4aShIpJfdJojWr' } },
    { params: { id: 'LpT7GvSXBnU8zBxXOy69' } },
    { params: { id: 'OBgTccuoHt2p1PRR5jMD' } },
    { params: { id: 'PfHsSnUNSDEfpCuoWSaN' } },
    { params: { id: 'Ru07tf1xh1K5Hkm1UoAl' } },
    { params: { id: 'UCBa7aL0sl28GESzBUcM' } },
    { params: { id: 'X1aoPtg6H0JkgPSQ1eRT' } },
    { params: { id: 'XWU4R0Gor5cRq6xOOrwE' } },
    { params: { id: 'Y6XJyyrHOAr3RdyyIyCH' } },
    { params: { id: 'ZiFxIBhxjOmSyZbfN7ym' } },
    { params: { id: 'hiqonQisUHzvZkAruiUC' } },
    { params: { id: 'jNsU28jDJwpnkRmkbbeU' } },
    { params: { id: 'jQmUDRNqoX6vDoMa68qx' } },
    { params: { id: 'lhTDB8V7ggcvDYxiciLN' } },
    { params: { id: 'mzyvODvAcXXQrvvz6b2H' } },
    { params: { id: 'n7KTJwZIs7tzFhEgcS1A' } },
    { params: { id: 'ny5ZcYNd2QAplsXxPwj8' } },
    { params: { id: 'qy7jxmUlsXiVZZI15oLf' } },
    { params: { id: 'xkeg6Sn4PgThsZJ2nzeA' } },
  ];

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  context
) => {
  if (context.params) {
    const { id } = context.params;
    try {
      const fetchedProject = (await getProject(id as string)) as IProject;
      if (fetchedProject) {
        return {
          props: {
            projectObj: {
              ...fetchedProject,
              criado_em: fetchedProject.criado_em.toString(),
            },
          },
        };
      }
    } catch (err) {}
  }
  return {
    props: {},
    notFound: true,
  };
};
