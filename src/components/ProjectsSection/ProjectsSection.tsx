import { collection, limit, orderBy, query, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { IProject } from '../../global/types';
import Loading from '../Loading';
import ProjectCard from './ProjectCard';
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
        limit(6)
      );

      const data = await getDocs(q);
      const fetchedProjects = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProjects(fetchedProjects);
      setLoading(false);
    };

    getProjetos();
  }, []);

  return (
    <S.Section>
      <S.TitleBar>
        <h2>Projetos</h2>
        <S.ButtonLink>Ver todos</S.ButtonLink>
      </S.TitleBar>
      {loading ? (
        <Loading />
      ) : (
        <S.CardGrid>
          {projects.map((project) => {
            return (
              <ProjectCard
                name={project.nome}
                id={project.id}
                image={project.imagem}
                key={project.id}
              />
            );
          })}
        </S.CardGrid>
      )}
    </S.Section>
  );
};

export default ProjectsSection;
