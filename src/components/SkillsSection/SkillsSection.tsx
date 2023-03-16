import { db } from '@/firebase-config';
import { ISkill } from '@/global/types';
import { getQuery } from '@/utils/firebaseCollections';
import { collection, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import SkillCard from './SkillCard/SkillCard';
import * as S from './SkillsSection.styled';

const SkillsSection = () => {
  const [skills, setSkills]: [ISkill[], any] = useState([]);
  const [loading, setLoading] = useState(true);
  const skillsCollectionRef = collection(db, 'habilidades');

  useEffect(() => {
    const getHabilidades = async () => {
      const q = query(skillsCollectionRef, orderBy('ordem', 'asc'));
      const fetchedSkills = await getQuery(q);
      setSkills(fetchedSkills);
      setLoading(false);
    };

    getHabilidades();
  }, []);

  return (
    <S.Section>
      {loading ? (
        <Loading />
      ) : (
        <S.ContentDiv>
          <h2>Habilidades e tecnologias</h2>
          <S.AnimatedSkillGrid
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={skill.imagem}
                skill={skill.nome}
                description={skill.descricao}
              />
            ))}
          </S.AnimatedSkillGrid>
        </S.ContentDiv>
      )}
      <img src='/assets/img/tech_bg.svg' alt='' />
    </S.Section>
  );
};

export default SkillsSection;
