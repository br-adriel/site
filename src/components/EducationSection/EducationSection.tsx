import { useEffect, useState } from 'react';
import { IEducationItem } from '../../global/types';
import Loading from '../Loading';
import EducationList from './EducationList';
import * as S from './EducationSection.styled';

interface IProps {
  education: IEducationItem[];
}

const EducationSection = ({ education }: IProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (education) setLoading(false);
  }, [education]);

  return (
    <S.Section>
      <S.ContentDiv>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2>Educação</h2>
            <EducationList data={education} />
          </>
        )}
      </S.ContentDiv>
      <img src='/assets/img/board_presentation.svg' alt='' />
    </S.Section>
  );
};

export default EducationSection;
