import Header from '@/components/admin/Header';
import ProjectForm from '@/components/admin/ProjectForm';
import ProjectList from '@/components/admin/ProjectList';
import WithAuth from '@/hocs/WithAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seção Projetos | Adminitração do Site',
  description: 'Visualize e edite os projetos exibidos no site',
};

export default function Projects() {
  return (
    <WithAuth>
      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Projetos</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <ProjectForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            <ProjectList />
          </div>
        </div>
      </main>
    </WithAuth>
  );
}
