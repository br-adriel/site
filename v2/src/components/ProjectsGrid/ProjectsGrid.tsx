import { IProject } from '../../global/types';
import ProjectCard from '../ProjectCard';
import * as S from './ProjectsGrid.styled';

interface IProps {
  projects: IProject[];
}

const ProjectsGrid: React.FC<IProps> = ({ projects }) => {
  return (
    <S.AnimatedCardGrid
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
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
    </S.AnimatedCardGrid>
  );
};

export default ProjectsGrid;
