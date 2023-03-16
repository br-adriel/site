import { ISkill } from '@/global/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import SkillCard from './SkillCard/SkillCard';
import * as S from './SkillsSection.styled';

interface IProps {
  skills: ISkill[];
}

const SkillsSection = ({ skills }: IProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (skills) setLoading(false);
  }, [skills]);

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
      <Image src='/assets/img/tech_bg.svg' alt='' width={248} height={555} />
    </S.Section>
  );
};

export default SkillsSection;
