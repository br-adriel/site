import ExperienceCard from '@/components/ExperienceCard';
import HelperComponent from '@/components/HelperComponent';
import ExperienceForm from '@/components/admin/ExperienceForm';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import { AppDispatch } from '@/store';
import {
  fetchExperiences,
  removeExperience,
  selectAllExperiences,
  selectExperiencesStatus,
  setFormvalues,
} from '@/store/experiencesSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Experience() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectExperiencesStatus);
  const experiences = useSelector(selectAllExperiences);

  const editExperience = (id: string) => {
    const selectedExperience = experiences.filter((exp) => exp.id === id)[0];
    dispatch(setFormvalues(selectedExperience));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchExperiences());
  }, [dispatch, listStatus]);

  return (
    <>
      <Head>
        <title>Seção Experiências | Adminitração do Site</title>
        <meta
          name='description'
          content='Visualize e edite as experiências exibidas no site'
        />
      </Head>

      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Experiência</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-alt_bg p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <ExperienceForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {listStatus === 'succeeded' ? (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {experiences.length ? (
                  experiences.map((exp) => (
                    <ExperienceCard
                      experience={exp}
                      key={exp.id}
                      onEdit={editExperience}
                      onRemove={(id: string) => dispatch(removeExperience(id))}
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

export default WithAuth(Experience);
