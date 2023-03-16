import BackButton from '@/components/BackButton';
import { ContainerSection } from '@/components/Container';
import Loading from '@/components/Loading';
import ProjectsGrid from '@/components/ProjectsGrid';
import ScrollLoad from '@/components/ScrollLoad';
import { addProjects, selectProjects } from '@/features/projectsSlice';
import { db } from '@/firebase-config';
import { IProject } from '@/global/types';
import { fetchPage, serializeProjectsArray } from '@/utils/firebaseCollections';
import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Projetos() {
  const dispatch = useDispatch();

  const { projects } = useSelector(selectProjects);
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
      const fetchedProjects = (await fetchPage(
        q,
        shouldFetch,
        lastProject
      )) as IProject[];
      dispatch(addProjects(serializeProjectsArray(fetchedProjects)));
    }
  };

  useEffect(() => {
    loading.current = false;
    getProjetos();
  }, []);

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <main>
        <Section>
          <Header>
            <BackButton />
            <h1>Projetos</h1>
          </Header>

          <ScrollLoad onScrollEnd={getProjetos}>
            {loading.current ? (
              <Loading />
            ) : (
              <ProjectsGrid projects={projects} />
            )}
          </ScrollLoad>
        </Section>
      </main>
    </>
  );
}

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;
