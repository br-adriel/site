import BackButton from '@/components/BackButton';
import ContainerSection from '@/components/ContainerSection';
import Loading from '@/components/Loading';
import ProjectsGrid from '@/components/ProjectsGrid';
import ScrollLoad from '@/components/ScrollLoad';
import { db } from '@/firebase-config';
import { IProject } from '@/global/types';
import { fetchPage, joinProjectsArrays } from '@/utils/firebaseCollections';
import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type projectsState = [
  IProject[],
  React.Dispatch<React.SetStateAction<IProject[]>>
];

export default function Projetos() {
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
