import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';
import Loading from '../components/Loading';
import ProjectsGrid from '../components/ProjectsGrid';
import ScrollLoad from '../components/ScrollLoad';
import { db } from '../firebase-config';
import { IProject } from '../global/types';
import { getQuery } from '../utils';

const Filter = () => {
  const { techName } = useParams();
  const projectsCollectionRef = collection(db, 'projetos');
  const [lastProject, setLastProject] = useState({});
  const [projects, setProjects]: [IProject[], any] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const firstLoadQuery = query(
    projectsCollectionRef,
    where('tecnologias', 'array-contains', techName),
    orderBy('criado_em', 'desc'),
    limit(10)
  );

  const pageQuery = query(
    projectsCollectionRef,
    where('tecnologias', 'array-contains', techName),
    orderBy('criado_em', 'desc'),
    startAfter(lastProject),
    limit(10)
  );

  const getProjetos = async () => {
    const q = isLoading ? firstLoadQuery : pageQuery;
    const fetched = (await getQuery(q)) as IProject[];
    console.log(fetched);

    setProjects((prev: IProject[]) => {
      if (prev.length && fetched.length) {
        for (let i = 1; i <= 10; i++) {
          let index = prev.length - i;
          if (index >= 0) {
            if (prev[index].id === fetched[0].id) {
              return prev;
            }
          }
        }
      }
      return [...prev, ...fetched];
    });
    if (fetched.length) setLastProject(fetched[fetched.length - 1]);
  };

  useEffect(() => {
    getProjetos();
    setIsLoading(false);
  }, []);

  return (
    <Section>
      <h1>Projetos que utilizam {techName}</h1>
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
