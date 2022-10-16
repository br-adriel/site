import React from 'react';
import * as S from './SkillCard.style';

interface IProps {
  icon: string;
  skill: string;
  description?: string;
}

const SkillCard: React.FC<IProps> = ({ icon, skill, description }) => {
  return (
    <S.Card
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duraation: 0.5, ease: 'easeOut' }}
    >
      <img src={icon} alt='' />
      <S.Content>
        <h3>{skill}</h3>
        <p>{description}</p>
      </S.Content>
    </S.Card>
  );
};

export default SkillCard;
