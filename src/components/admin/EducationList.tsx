'use client';

import EducationCard from '@/components/EducationCard';
import HelperComponent from '@/components/HelperComponent';
import { AppDispatch } from '@/store';
import {
  fetchEducation,
  removeEducation,
  selectAllEducation,
  selectEducationStatus,
  setFormvalues,
} from '@/store/educationSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EducationList() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectEducationStatus);
  const education = useSelector(selectAllEducation);

  const editEducation = (id: string) => {
    const selectedEducation = education.filter((ed) => ed.id === id)[0];
    dispatch(setFormvalues(selectedEducation));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchEducation());
  }, [dispatch, listStatus]);

  return listStatus === 'succeeded' ? (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      {education.length ? (
        education.map((ed) => (
          <EducationCard
            education={ed}
            key={ed.id}
            onEdit={editEducation}
            onRemove={(id: string) => dispatch(removeEducation(id))}
          />
        ))
      ) : (
        <HelperComponent
          option='noElements'
          noElementsMessage='Nenhum registro encontrado'
        />
      )}
    </div>
  ) : (
    <HelperComponent option={listStatus} />
  );
}

export default EducationList;
