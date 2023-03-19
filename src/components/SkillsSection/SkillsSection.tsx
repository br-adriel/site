import { ISkill } from '@/global/types';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import SkillPopover from './SkillPopover';
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
              <SkillPopover skill={skill} key={skill.id} />
            ))}
          </S.AnimatedSkillGrid>
        </S.ContentDiv>
      )}
    </S.Section>
  );
};

export default SkillsSection;
