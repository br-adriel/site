import * as S from './SkillCard.style';

interface IProps {
  icon: string;
  skill: string;
  description?: string;
}

const SkillCard: React.FC<IProps> = ({ icon, skill, description }) => {
  return (
    <S.Card>
      <img src={icon} alt='' />
      <S.Content>
        <h3>{skill}</h3>
        <p>{description}</p>
      </S.Content>
    </S.Card>
  );
};

export default SkillCard;
