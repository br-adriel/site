'use client';

import { fadeInUpAnimation } from '@/animations/FadeInUp';
import { delay, motion } from 'framer-motion';
import { ArrowRight } from 'react-bootstrap-icons';

interface IProps {
  cargo: string;
  data: string;
  delay?: number;
  empresa: string;
  tarefas: string[];
}

export default function ExperienceCard({
  cargo,
  data,
  delay,
  empresa,
  tarefas,
}: IProps) {
  const animation = fadeInUpAnimation(0.2 * (delay || 0));

  return (
    <motion.div
      {...animation}
      className='bg-alt_bg shadow rounded py-3 px-4 hover:shadow-md transition-shadow'
    >
      <h3 className='text-2xl mb-1 font-medium'>{empresa}</h3>
      <p className='text-md opacity-70'>{data}</p>
      <hr className='border opacity-10 my-2 rounded' />
      <h4 className='text-xl font-medium'>{cargo}</h4>
      <ul>
        {tarefas.map((tarefa) => {
          return (
            <li className='flex items-center' key={tarefa}>
              <ArrowRight className='inline-block mr-2 opacity-60' />
              <span>{tarefa}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
