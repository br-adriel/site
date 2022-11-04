import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import board_presentation from '../../assets/img/board_presentation.svg';
import { db } from '../../firebase-config';
import { IEducationItem } from '../../global/types';
import EducationList from './EducationList';
import * as S from './EducationSection.styled';

const EducationSection = () => {
  const [education, setEducation]: [IEducationItem[], any] = useState([]);
  const educationCollectionRef = collection(db, 'educacao');

  useEffect(() => {
    const getEducacao = async () => {
      const data = await getDocs(educationCollectionRef);
      setEducation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEducacao();
  }, []);

  return (
    <S.Section>
      <S.ContentDiv>
        <h2>Educação</h2>
        <EducationList data={education} />
      </S.ContentDiv>
      <img src={board_presentation} alt='' />
    </S.Section>
  );
};

export default EducationSection;
