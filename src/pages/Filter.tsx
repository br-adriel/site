import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';
import Loading from '../components/Loading';
import ProjectsGrid from '../components/ProjectsGrid';
import ScrollLoad from '../components/ScrollLoad';
import { db } from '../firebase-config';
import { IProject } from '../global/types';
import { fetchPage, joinProjectsArrays } from '../utils';

type projectsState = [
  IProject[],
  React.Dispatch<React.SetStateAction<IProject[]>>
];

const Filter = () => {
  const { techName } = useParams();
  const projectsCollectionRef = collection(db, 'projetos');
  const [projects, setProjects]: projectsState = useState([] as IProject[]);
  const isLoading = useRef(true);
  const lastProject = useRef({});
  const shouldFetch = useRef(true);

  const getProjetos = async () => {
    const q = query(
      projectsCollectionRef,
      where('tecnologias', 'array-contains', techName),
      orderBy('criado_em', 'desc'),
      startAfter(lastProject.current),
      limit(10)
    );

    if (shouldFetch) {
      const fetchedProjects = await fetchPage(q, shouldFetch, lastProject);
      setProjects((prev) =>
        joinProjectsArrays(prev, fetchedProjects as IProject[])
      );
    }
  };

  useEffect(() => {
    isLoading.current = false;
    getProjetos();
  }, []);

  return (
    <Section>
      <Helmet>
        <title>Projetos que utilizam {techName}</title>
      </Helmet>
      <h1>Projetos que utilizam {techName}</h1>
      <ScrollLoad onScrollEnd={getProjetos}>
        {isLoading.current ? (
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
  );
};

export default Filter;

const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;
