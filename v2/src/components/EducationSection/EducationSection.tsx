import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { IEducationItem } from '../../global/types';
import Loading from '../Loading';
import EducationList from './EducationList';
import * as S from './EducationSection.styled';

const EducationSection = () => {
  const [education, setEducation]: [IEducationItem[], any] = useState([]);
  const [loading, setLoading] = useState(true);
  const educationCollectionRef = collection(db, 'educacao');

  useEffect(() => {
    const getEducacao = async () => {
      const data = await getDocs(educationCollectionRef);
      setEducation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getEducacao();
  }, []);

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
