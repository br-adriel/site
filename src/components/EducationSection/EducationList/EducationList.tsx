import React from 'react';
import { IEducationItem } from '../../../global/types';
import { getMonthName } from '../../../utils';
import * as S from './EducationList.styled';

interface IProps {
  data: IEducationItem[];
}

const EducationList: React.FC<IProps> = ({ data }) => {
  return (
    <S.List>
      {data.map((education) => (
        <S.Card
          key={education.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duraation: 0.5, ease: 'easeOut' }}
        >
          <h3>
            {education.curso} ({education.instituicao})
          </h3>
          <p>
            {getMonthName(education.mes_inicio, true)} {education.ano_inicio} -{' '}
            {getMonthName(education.mes_fim, true)} {education.ano_fim}
          </p>
        </S.Card>
      ))}
    </S.List>
  );
};

export default EducationList;
