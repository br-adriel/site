import { getMonthName } from '@/utils/dates';
import { IEducationItem } from '../../../global/types';
import * as S from './EducationList.styled';

interface IProps {
  data: IEducationItem[];
}

const EducationList: React.FC<IProps> = ({ data }) => {
  return (
    <S.AnimatedList
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {data.map((education) => (
        <S.Card key={education.id}>
          <h3>
            {education.curso} ({education.instituicao})
          </h3>
          <p>
            {getMonthName(education.mes_inicio, true)} {education.ano_inicio} -{' '}
            {getMonthName(education.mes_fim, true)} {education.ano_fim}
          </p>
        </S.Card>
      ))}
    </S.AnimatedList>
  );
};

export default EducationList;
