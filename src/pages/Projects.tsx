import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import Loading from '../components/Loading';
import ProjectsGrid from '../components/ProjectsGrid';
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

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) getProjetos();
    }, {});

    obs.observe(document.getElementById('fimGrid') as Element);
    return () => obs.disconnect();
  }, []);

  return (
    <Section>
      <h1>Projetos</h1>
      {loading ? <Loading /> : <ProjectsGrid projects={projects} />}
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
