'use client';

import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { selectSelectedSkill } from '@/store/skillsSlice';
import Status from '@/types/Status';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HelperComponent from './HelperComponent';
import LoadingScreen from './LoadingScreen';
import ModalBody from './Modal/ModalBody';
import ProjectCard from './ProjectCard';

interface IProps {
  open: boolean;
  locale?: string;
}

export default function SkillModal({ open, locale }: IProps) {
  const t = useTranslations('misc');
  const tHome = useTranslations('home.page');

  const skill = useSelector(selectSelectedSkill);
  const [projects, setProjects] = useState<IProject[]>([]);
  const status = useRef<Status>('idle');

  useEffect(() => {
    const load = async () => {
      if (skill) {
        if (status.current === 'idle') {
          if (skill.temProjetos) {
            try {
              status.current = 'loading';
              const fetchedProjects =
                await ProjectController.getAllByTechnology(
                  skill.filtro,
                  locale
                );
              setProjects(fetchedProjects);
              status.current = 'succeeded';
            } catch (err) {
              status.current = 'failed';
            }
          } else {
            status.current = 'succeeded';
          }
        }
      }
    };

    status.current = 'idle';
    load();
  }, [skill]);

  return (
    <ModalBody
      open={open}
      title={<h2 className='font-bold'>{skill ? skill.nome : t('loading')}</h2>}
    >
      {skill ? (
        <>
          <div className='w-full lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row lg:flex-col gap-3'>
            <Image
              width={200}
              height={200}
              alt=''
              src={skill.imagem}
              className='w-full sm:w-2/6 lg:w-full p-10 bg-white rounded mb-3 inline-block'
            />
            <p>{skill.descricao}</p>
          </div>
          {status.current !== 'succeeded' ? (
            <HelperComponent option={status.current} />
          ) : (
            <div className='w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
              {projects.length ? (
                projects.map((project) => {
                  return <ProjectCard project={project} key={project.id} />;
                })
              ) : (
                <HelperComponent
                  option='noElements'
                  noElementsMessage={tHome('no-projects-with-tech')}
                />
              )}
            </div>
          )}
        </>
      ) : (
        <LoadingScreen />
      )}
    </ModalBody>
  );
}
