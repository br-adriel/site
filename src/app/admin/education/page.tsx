import EducationForm from '@/components/admin/EducationForm';
import EducationList from '@/components/admin/EducationList';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seção Educação | Adminitração do Site',
  description: 'Visualize e edite as educações exibidas no site',
};

export default function Education() {
  return (
    <WithAuth>
      {' '}
      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Educação</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <EducationForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            <EducationList />
          </div>
        </div>
      </main>
    </WithAuth>
  );
}
