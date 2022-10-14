import * as S from './SkillsSection.styled';
import techImg from '../../assets/img/tech_bg.svg';

const SkillsSection = () => {
  return (
    <S.Section>
      <S.ContentDiv>
        <h2>Habilidades e tecnologias</h2>
      </S.ContentDiv>
      <img src={techImg} alt='' />
    </S.Section>
  );
};

export default SkillsSection;
