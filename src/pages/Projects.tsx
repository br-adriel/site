import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import Loading from '../components/Loading';
import ProjectsGrid from '../components/ProjectsGrid';
import ScrollLoad from '../components/ScrollLoad';
import { db } from '../firebase-config';
import { IProject } from '../global/types';

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
    setProjects((prev: IProject[]) => {
      if (prev.length && fetchedProjects.length) {
        for (let i = 1; i <= 10; i++) {
          let index = prev.length - i;
          if (index >= 0) {
            if (prev[index].id === fetchedProjects[0].id) {
              return prev;
            }
          }
        }
      }
      return [...prev, ...fetchedProjects];
    });
    if (data.size) setLastProject(data.docs[data.size - 1]);
  };

  useEffect(() => {
    getProjetos();
    setLoading(false);
  }, []);

  return (
    <Section>
      <Helmet>
        <title>Projetos</title>
      </Helmet>
      <h1>Projetos</h1>
      <ScrollLoad onScrollEnd={getProjetos}>
        {loading ? <Loading /> : <ProjectsGrid projects={projects} />}
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
