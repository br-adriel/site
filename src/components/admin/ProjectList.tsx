'use client';

import HelperComponent from '@/components/HelperComponent';
import ProjectCard from '@/components/admin/ProjectCard';
import { AppDispatch } from '@/store';
import {
  fetchProjects,
  removeProject,
  selectAllProjects,
  selectProjectsStatus,
  setFormvalues,
} from '@/store/projectsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProjectList() {
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

  return listStatus === 'succeeded' ? (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      {projects.length ? (
        projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            onEdit={editProject}
            onRemove={(id: string) => dispatch(removeProject(id))}
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
  );
}

export default ProjectList;
