import { fadeInGrow } from '@/animations/FadeInGrow';
import ISkill from '@/interfaces/ISkill';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pen, Trash } from 'react-bootstrap-icons';
import Button from '../Button';

interface IProps {
  delay?: number;
  skill: ISkill;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export default function SkillCard({ delay, skill, onEdit, onRemove }: IProps) {
  const cardAnimation = fadeInGrow(0.1 * (delay || 0), 0.2);

  return (
    <motion.div {...cardAnimation}>
      <div
        title={skill.nome}
        className='bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-2 rounded shadow hover:shadow-md focus:outline-blue-600 focus:outline-2 focus:outline-offset-4 transition-all'
      >
        <div className='grid grid-cols-12 gap-3'>
          <div className='flex flex-col col-span-2'>
            <Image
              src={skill.imagem}
              alt={skill.nome}
              width={80}
              height={80}
              className='p-2 bg-white rounded w-full'
            />
            {onEdit && onRemove ? (
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <Button
                  type='button'
                  title='Editar'
                  onClick={() => onEdit(skill.id)}
                >
                  <Pen />
                </Button>
                <Button
                  type='button'
                  title='Remover'
                  onClick={() => onRemove(skill.id)}
                >
                  <Trash />
                </Button>
              </div>
            ) : null}
          </div>
          <div className='flex flex-col col-span-10'>
            <h2 className='text-zl font-semibold'>{skill.nome}</h2>
            <p className='font-light'>{skill.descricao}</p>
            <p>Filtro: {skill.filtro}</p>
            <p>Ordem: {skill.ordem}</p>
            <p>Tem projetos? {skill.temProjetos ? 'Sim' : 'Não'}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
