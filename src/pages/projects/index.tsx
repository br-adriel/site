import { fadeInUpAnimation } from '@/animations/FadeInUp';
import BackButton from '@/components/BackButton';
import LoadingScreen from '@/components/LoadingScreen';
import ProjectCard from '@/components/ProjectCard';
import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const projectsFirstLoad = useRef(true);
  const projectsLoading = useRef(false);
  const reachedEnd = useRef(false);
  const lastProject = useRef<QueryDocumentSnapshot | undefined>(undefined);

  useEffect(() => {
    const loadPage = async () => {
      if (!projectsLoading.current && !reachedEnd.current) {
        projectsLoading.current = true;

        const { lastProjectDoc, projects } = await ProjectController.getPage(
          lastProject.current
        );
        setProjects((prev) => [...prev, ...projects]);

        lastProject.current = lastProjectDoc;
        reachedEnd.current = !lastProjectDoc;
        projectsFirstLoad.current = false;
        projectsLoading.current = false;
      }
    };

    loadPage();

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadPage();
    }, {});

    obs.observe(document.getElementById(`scrollFinishMark`) as Element);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Projetos | Adriel Santos - Desenvolvedor Fullstack</title>
        <meta
          name='description'
          content='Confira alguns dos projetos que eu já construí'
        />
      </Head>

      <main className='container mx-auto min-h-screen p-4 flex-col'>
        <div className='flex gap-4 mb-4'>
          <BackButton />
          <h1 className='font-semibold text-3xl'>Projetos</h1>
        </div>
        {projectsFirstLoad.current ? (
          <div className='flex-grow flex items-center justify-center'>
            <LoadingScreen />
          </div>
        ) : (
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {projects.map((project, index) => (
              <motion.div
                {...fadeInUpAnimation((index % 10) * 0.2)}
                className='flex'
                key={project.id}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </section>
        )}
        <div id='scrollFinishMark' className='w-full h-1'></div>
      </main>
    </>
  );
}
