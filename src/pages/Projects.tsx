import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import { ProjectCard } from '../components/ProjectsSection';
import { IProject } from '../global/types';
import { db } from '../firebase-config';
import {
  collection,
  orderBy,
  query,
  getDocs,
  limit,
  startAfter,
} from 'firebase/firestore';
import Loading from '../components/Loading';

const Projects = () => {
  const [projects, setProjects]: [IProject[], any] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastProject, setLastProject] = useState({});

  const projectsCollectionRef = collection(db, 'projetos');

  const firstLoadQuery = query(
    projectsCollectionRef,
    orderBy('criado_em', 'desc'),
    limit(10)
  );

  const pageQuery = query(
    projectsCollectionRef,
    orderBy('criado_em', 'desc'),
    startAfter(lastProject),
    limit(10)
  );

  const getProjetos = async () => {
    const q = loading ? firstLoadQuery : pageQuery;
    const data = await getDocs(q);
    const fetchedProjects = data.docs.map(
      (doc) =>
        ({
          ...doc.data(),
          id: doc.id,
        } as IProject)
    );
    setProjects((prev: IProject[]) => [...prev, ...fetchedProjects]);
    if (data.size) setLastProject(data.docs[data.size - 1]);
  };

  useEffect(() => {
    getProjetos();
    setLoading(false);

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) getProjetos();
    }, {});

    obs.observe(document.getElementById('fimGrid') as Element);
    return () => obs.disconnect();
  }, []);

  return (
    <Section>
      <h1>Projetos</h1>
      {loading ? (
        <Loading />
      ) : (
        <CardGrid>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.nome}
                image={project.imagem}
              />
            );
          })}
        </CardGrid>
      )}
      <div id='fimGrid' />
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
    position: ;
  }

  #fimGrid {
    width: 100%;
    height: 10px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 1fr;
`;