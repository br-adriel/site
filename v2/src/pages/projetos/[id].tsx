import { ContainerSection } from '@/components/Container';
import ErrorDisplay from '@/components/ErrorDisplay';
import Loading from '@/components/Loading';
import ProjectDetails from '@/components/ProjectDetails';
import { IProject } from '@/global/types';
import { getProject } from '@/utils/firebaseCollections';
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
      </Head>
      <main>
        <ContainerSection>
          {isLoading ? <Loading /> : <ProjectDetails projeto={project} />}
        </ContainerSection>
      </main>
    </>
  );
}
