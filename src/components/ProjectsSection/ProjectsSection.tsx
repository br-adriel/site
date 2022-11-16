import { collection, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { IProject } from '../../global/types';
import { getQuery } from '../../utils';
import Loading from '../Loading';
import ProjectCard from '../ProjectCard';
import ProjectsGrid from '../ProjectsGrid';
import * as S from './ProjectsSection.styled';

const ProjectsSection = () => {
  const [projects, setProjects]: [IProject[], any] = useState([]);
  const [loading, setLoading] = useState(true);
  const projectsCollectionRef = collection(db, 'projetos');

  useEffect(() => {
    const getProjetos = async () => {
      const q = query(
        projectsCollectionRef,
        orderBy('criado_em', 'desc'),
        limit(3)
      );

      const fetchedProjects = await getQuery(q);
      setProjects(fetchedProjects);
      setLoading(false);
    };

    getProjetos();
  }, []);

  return (
    <S.Section>
      <S.TitleBar>
        <h2>Projetos</h2>
        <S.ButtonLink to='/projetos'>Ver todos</S.ButtonLink>
      </S.TitleBar>
      {loading ? <Loading /> : <ProjectsGrid projects={projects} />}
    </S.Section>
  );
};

export default ProjectsSection;
