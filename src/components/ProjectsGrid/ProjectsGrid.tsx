import React from 'react';
import { IProject } from '../../global/types';
import * as S from './ProjectsGrid.styled';
import ProjectCard from '../ProjectCard';

interface IProps {
  projects: IProject[];
}

const ProjectsGrid: React.FC<IProps> = ({ projects }) => {
  return (
    <S.CardGrid>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.nome}
            image={project.imagem}
          />
        );
      })}
    </S.CardGrid>
  );
};

export default ProjectsGrid;
