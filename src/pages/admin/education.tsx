import EducationCard from '@/components/EducationCard';
import HelperComponent from '@/components/HelperComponent';
import EducationForm from '@/components/admin/EducationForm';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import { AppDispatch } from '@/store';
import {
  fetchEducation,
  removeEducation,
  selectAllEducation,
  selectEducationStatus,
  setFormvalues,
} from '@/store/educationSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Education() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectEducationStatus);
  const education = useSelector(selectAllEducation);

  const editEducation = (id: string) => {
    const selectedEducation = education.filter((ed) => ed.id === id)[0];
    dispatch(setFormvalues(selectedEducation));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchEducation());
  }, [dispatch, listStatus]);

  return (
    <>
      <Head>
        <title>Seção Educação | Adminitração do Site</title>
        <meta
          name='description'
          content='Visualize e edite as educações exibidas no site'
        />
      </Head>

      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Educação</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-alt_bg p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <EducationForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {listStatus === 'succeeded' ? (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {education.length ? (
                  education.map((ed) => (
                    <EducationCard
                      education={ed}
                      key={ed.id}
                      onEdit={editEducation}
                      onRemove={(id: string) => dispatch(removeEducation(id))}
                    />
                  ))
                ) : (
                  <HelperComponent
                    option='noElements'
                    noElementsMessage='Nenhum registro encontrado'
                  />
                )}
              </div>
            ) : (
              <HelperComponent option={listStatus} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default WithAuth(Education);
