import BackButton from '@/components/BackButton';
import ProjectsList from '@/components/ProjectsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | Adriel Santos - Desenvolvedor Fullstack',
  description: 'Confira alguns dos projetos que eu já construí',
};

export default function Projects() {
  return (
    <main className='container mx-auto min-h-screen p-4 flex-col'>
      <div className='flex gap-4 mb-4'>
        <BackButton />
        <h1 className='font-semibold text-3xl'>Projetos</h1>
      </div>

      <ProjectsList />
    </main>
  );
}
