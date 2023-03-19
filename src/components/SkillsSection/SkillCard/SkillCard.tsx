import Image from 'next/image';
import * as S from './SkillCard.style';

interface IProps {
  icon: string;
  skill: string;
  description?: string;
}

const SkillCard: React.FC<IProps> = ({ icon, skill }) => {
  return (
    <S.Card>
      <Image src={icon} alt='' width={48} height={48} />
      <h3>{skill}</h3>
    </S.Card>
  );
};

export default SkillCard;
