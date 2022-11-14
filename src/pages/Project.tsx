import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';
import Loading from '../components/Loading';
import ProjectDetails from '../components/ProjectDetails';
import { IProject } from '../global/types';
import { getProject } from '../utils';

interface IProps {
  projectObj?: IProject;
}

const Project: React.FC<IProps> = ({ projectObj }) => {
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
  const [itExists, setItExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const fetchedProject = await getProject(projectId as string);
      if (!fetchedProject) setItExists(false);
      else setProject(fetchedProject as IProject);
      setIsLoading(false);
    };

    if (projectObj) {
      setProject(projectObj);
      setIsLoading(false);
    } else {
      fetch();
    }
  }, []);

  return (
    <ContainerSection>
      {isLoading ? (
        <Loading />
      ) : itExists ? (
        <ProjectDetails projeto={project} />
      ) : (
        <ErrorDisplay title='Projeto não encontrado' />
      )}
    </ContainerSection>
  );
};

export default Project;
