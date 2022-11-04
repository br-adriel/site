import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import techImg from '../../assets/img/tech_bg.svg';
import { db } from '../../firebase-config';
import { ISkill } from '../../global/types';
import Loading from '../Loading';
import SkillCard from './SkillCard/SkillCard';
import * as S from './SkillsSection.styled';

const SkillsSection = () => {
  const [skills, setSkills]: [ISkill[], any] = useState([]);
  const [loading, setLoading] = useState(true);
  const skillsCollectionRef = collection(db, 'habilidades');

  useEffect(() => {
    const getHabilidades = async () => {
      const data = await getDocs(skillsCollectionRef);
      setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
          <S.SkillGrid>
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={skill.imagem}
                skill={skill.nome}
                description={skill.descricao}
              />
            ))}
          </S.SkillGrid>
        </S.ContentDiv>
      )}
      <img src={techImg} alt='' />
    </S.Section>
  );
};

export default SkillsSection;
