'use client';

import ExperienceCard from '@/components/ExperienceCard';
import HelperComponent from '@/components/HelperComponent';
import { AppDispatch } from '@/store';
import {
  fetchExperiences,
  removeExperience,
  selectAllExperiences,
  selectExperiencesStatus,
  setFormvalues,
} from '@/store/experiencesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ExperienceList() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectExperiencesStatus);
  const experiences = useSelector(selectAllExperiences);

  const editExperience = (id: string) => {
    const selectedExperience = experiences.filter((exp) => exp.id === id)[0];
    dispatch(setFormvalues(selectedExperience));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchExperiences());
  }, [dispatch, listStatus]);

  return listStatus === 'succeeded' ? (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
      {experiences.length ? (
        experiences.map((exp) => (
          <ExperienceCard
            experience={exp}
            key={exp.id}
            onEdit={editExperience}
            onRemove={(id: string) => dispatch(removeExperience(id))}
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

export default ExperienceList;
