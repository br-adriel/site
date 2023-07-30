import { fadeInUpAnimation } from '@/animations/FadeInUp';
import IProject from '@/interfaces/IProject';
import { motion } from 'framer-motion';
import LinkButton from '../LinkButton';
import ProjectCard from '../ProjectCard';

interface IProps {
  projects: IProject[];
}

export default function ProjectsSection({ projects }: IProps) {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <div className='flex justify-between gap-5 items-center'>
        <h2 className='text-4xl font-semibold mb-3'>Projetos</h2>
        <LinkButton href='/projects'>Ver todos</LinkButton>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {projects.map((project, index) => {
          return (
            <motion.div
              {...fadeInUpAnimation(index * 0.2)}
              className='flex'
              key={index}
            >
              <ProjectCard key={project.id} project={project} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
