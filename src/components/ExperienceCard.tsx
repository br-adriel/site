'use client';

import { fadeInUpAnimation } from '@/animations/FadeInUp';
import IExperience from '@/interfaces/IExperience';
import { getShortMonthName } from '@/utils/date';
import { motion } from 'framer-motion';
import { ArrowRight, Pen, Trash } from 'react-bootstrap-icons';
import Button from './Button';

interface IProps {
  delay?: number;
  experience: IExperience;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export default function ExperienceCard({
  delay,
  experience,
  onEdit,
  onRemove,
}: IProps) {
  const animation = fadeInUpAnimation(0.2 * (delay || 0));

  return (
    <motion.div
      {...animation}
      className='bg-siteBgAlt-light dark:bg-siteBgAlt-dark shadow rounded py-3 px-4 hover:shadow-md transition-shadow'
    >
      <h3 className='text-2xl mb-1 font-medium'>{experience.empresa}</h3>
      <p className='text-md opacity-70'>
        {`${getShortMonthName(experience.mesInicio)} ${
          experience.anoInicio
        } - `}
        {experience.mesFim
          ? `${getShortMonthName(experience.mesFim)} ${experience.anoFim}`
          : 'Atualmente'}
      </p>
      <hr className='border opacity-10 my-2 rounded' />
      <h4 className='text-xl font-medium'>{experience.cargo}</h4>
      <ul>
        {experience.tarefas.map((tarefa) => {
          return (
            <li className='flex items-center' key={tarefa}>
              <ArrowRight className='inline-block mr-2 opacity-60' />
              <span>{tarefa}</span>
            </li>
          );
        })}
      </ul>
      {onEdit && onRemove ? (
        <div className='mt-2 flex gap-2'>
          <Button
            type='button'
            title='Editar'
            onClick={() => onEdit(experience.id)}
          >
            <Pen />
          </Button>
          <Button
            type='button'
            title='Remover'
            onClick={() => onRemove(experience.id)}
          >
            <Trash />
          </Button>
        </div>
      ) : null}
    </motion.div>
  );
}
