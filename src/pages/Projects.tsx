import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
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

const Projects = () => {
  const [projects, setProjects]: projectsState = useState([] as IProject[]);
  const lastProject = useRef({});
  const shouldFetch = useRef(true);
  const loading = useRef(true);
  const projectsCollectionRef = collection(db, 'projetos');

  const getProjetos = async () => {
    const q = query(
      projectsCollectionRef,
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
    loading.current = false;
    getProjetos();
  }, []);

  return (
    <Section>
      <Helmet>
        <title>Projetos</title>
      </Helmet>
      <h1>Projetos</h1>
      <ScrollLoad onScrollEnd={getProjetos}>
        {loading.current ? <Loading /> : <ProjectsGrid projects={projects} />}
      </ScrollLoad>
    </Section>
  );
};

export default Projects;

const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;
