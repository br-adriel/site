import { fadeInGrow } from '@/animations/FadeInGrow';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pen, Trash } from 'react-bootstrap-icons';
import Button from '../Button';
import IProject from '@/interfaces/IProject';

interface IProps {
  delay?: number;
  project: IProject;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export default function ProjectCard({
  delay,
  project,
  onEdit,
  onRemove,
}: IProps) {
  const cardAnimation = fadeInGrow(0.1 * (delay || 0), 0.2);

  return (
    <motion.div {...cardAnimation}>
      <div className='bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-2 rounded shadow hover:shadow-md focus:outline-blue-600 focus:outline-2 focus:outline-offset-4 transition-all'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='flex flex-col col-span-3'>
            <Image
              src={project.imagem}
              alt={project.nome}
              width={80}
              height={80}
              className='rounded w-full'
            />
            {onEdit && onRemove ? (
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <Button
                  type='button'
                  title='Editar'
                  onClick={() => onEdit(project.id)}
                >
                  <Pen />
                </Button>
                <Button
                  type='button'
                  title='Remover'
                  onClick={() => onRemove(project.id)}
                >
                  <Trash />
                </Button>
              </div>
            ) : null}
          </div>
          <div className='flex flex-col col-span-9'>
            <h2 className='text-zl font-semibold'>{project.nome}</h2>
            <p className='font-light'>{project.descricao}</p>
            <p>
              Data de criação:{' '}
              {new Date(
                project.dataCriacao.split('-').join('/')
              ).toLocaleDateString()}
            </p>
            <p>Repositório: {project.linkRepositorio || '-'}</p>
            <p>Visualização: {project.linkVisualizacao || '-'}</p>
            <p>
              Tecnologias:{' '}
              {project.tecnologias.length
                ? project.tecnologias.join(', ')
                : '-'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
