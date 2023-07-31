import HelperComponent from '@/components/HelperComponent';
import Header from '@/components/admin/Header';
import SkillCard from '@/components/admin/SkillCard';
import SkillForm from '@/components/admin/SkillForm';
import WithAuth from '@/hocs/WithAuth';
import { AppDispatch } from '@/store';
import {
  fetchSkills,
  removeSkill,
  selectAllSkills,
  selectSkillsStatus,
  setFormvalues,
} from '@/store/skillsSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Skills() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectSkillsStatus);
  const skills = useSelector(selectAllSkills);

  const editSkill = (id: string) => {
    const selectedSkill = skills.filter((skill) => skill.id === id)[0];
    dispatch(setFormvalues(selectedSkill));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchSkills());
  }, [dispatch, listStatus]);

  return (
    <>
      <Head>
        <title>Seção Habilidades | Adminitração do Site</title>
        <meta
          name='description'
          content='Visualize e edite as habilidades exibidas no site'
        />
      </Head>

      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Habilidades</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            <SkillForm />
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {listStatus === 'succeeded' ? (
              <div className='grid grid-cols-1'>
                {skills.length ? (
                  skills.map((skill) => (
                    <SkillCard
                      skill={skill}
                      key={skill.id}
                      onEdit={editSkill}
                      onRemove={(id: string) => dispatch(removeSkill(id))}
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

export default WithAuth(Skills);
