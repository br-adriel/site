import IProject from '@/interfaces/IProject';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className='bg-alt_bg p-3 rounded shadow hover:shadow-lg transition-shadow focus:outline-blue-600 focus:outline-2 focus-visible:outline w-full'
    >
      <Image
        alt=''
        width={1067}
        height={600}
        className='w-full rounded mb-2'
        src={project.imagem}
      />
      <h3 className='text-2xl font-semibold'>{project.nome}</h3>
    </Link>
  );
}
