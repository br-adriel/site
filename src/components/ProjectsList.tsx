'use client';

import { fadeInUpAnimation } from '@/animations/FadeInUp';
import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import ProjectCard from './ProjectCard';

type Props = {
  locale?: string;
};

function ProjectsList({ locale }: Props) {
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
          lastProject.current,
          locale
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
      {projectsFirstLoad.current ? (
        <div className='flex-grow flex items-center justify-center'>
          <LoadingScreen />
        </div>
      ) : (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {projects.map((project, index) => (
            <motion.div
              {...fadeInUpAnimation((index % 6) * 0.2)}
              className='flex'
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </section>
      )}
      <div id='scrollFinishMark' className='w-full h-1' />
    </>
  );
}

export default ProjectsList;
