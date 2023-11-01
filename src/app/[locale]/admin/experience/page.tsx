import ExperienceForm from '@/components/admin/ExperienceForm';
import ExperienceList from '@/components/admin/ExperienceList';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seção Experiências | Adminitração do Site',
  description: 'Visualize e edite as experiências exibidas no site',
};

export default function Experience() {
  return (
    <WithAuth>
      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Experiência</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <ExperienceForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            <ExperienceList />
          </div>
        </div>
      </main>
    </WithAuth>
  );
}
