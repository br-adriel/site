import HelperComponent from '@/components/HelperComponent';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import { AppDispatch } from '@/store';
import {
  fetchProjects,
  selectAllProjects,
  selectProjectsStatus,
  setFormvalues,
} from '@/store/projectsSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectProjectsStatus);
  const projects = useSelector(selectAllProjects);

  const editProject = (id: string) => {
    const selectedProject = projects.filter((project) => project.id === id)[0];
    dispatch(setFormvalues(selectedProject));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchProjects());
  }, [dispatch, listStatus]);

  return (
    <>
      <Head>
        <title>Seção Projetos | Adminitração do Site</title>
        <meta
          name='description'
          content='Visualize e edite os projetos exibidos no site'
        />
      </Head>

      <Header />
      <main className='container mx-auto p-3'>
        <h2 className='text-2xl font-semibold mb-3'>Projetos</h2>
        <div className='grid grid-cols-12 gap-3'>
          <div className='rounded bg-alt_bg p-3 col-span-12 md:col-span-5 lg:col-span-3'>
            {/* <EducationForm /> */}
          </div>
          <div className='col-span-12 md:col-span-7 lg:col-span-9'>
            {listStatus === 'succeeded' ? (
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {projects.length ? (
                  projects.map((projects) => (
                    <ProjectCard
                      key={projects.id}
                      // onEdit={editProject}
                      // onRemove={(id: string) => dispatch(removeProject(id))}
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

export default WithAuth(Projects);
