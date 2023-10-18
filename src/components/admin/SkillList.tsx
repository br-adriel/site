'use client';

import HelperComponent from '@/components/HelperComponent';
import SkillCard from '@/components/admin/SkillCard';
import { AppDispatch } from '@/store';
import {
  fetchSkills,
  removeSkill,
  selectAllSkills,
  selectSkillsStatus,
  setFormvalues,
} from '@/store/skillsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SkillList() {
  const dispatch = useDispatch<AppDispatch>();
  const listStatus = useSelector(selectSkillsStatus);
  const skills = useSelector(selectAllSkills);

  const editSkill = (id: string) => {
    const selectedSkill = skills.filter((skill) => skill.id === id)[0];
    dispatch(setFormvalues(selectedSkill));
  };

  useEffect(() => {
    if (listStatus === 'idle') dispatch(fetchSkills());
  }, [dispatch, listStatus]);

  return listStatus === 'succeeded' ? (
    <div className='grid grid-cols-1'>
      {skills.length ? (
        skills.map((skill) => (
          <SkillCard
            skill={skill}
            key={skill.id}
            onEdit={editSkill}
            onRemove={(id: string) => dispatch(removeSkill(id))}
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

export default SkillList;
