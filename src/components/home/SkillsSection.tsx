import { AppDispatch } from '@/store';
import {
  fetchSkills,
  selectAllSkills,
  selectSkillsStatus,
} from '@/store/skillsSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import SkillCard from '../SkillCard';
import SkillModal from '../SkillModal';
import HelperComponent from '../HelperComponent';

export default function SkillsSection() {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(selectSkillsStatus);
  const skills = useSelector(selectAllSkills);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchSkills());
  }, [dispatch, status]);

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Habilidades</h2>
      {status === 'succeeded' ? (
        skills.length ? (
          <Modal open={showModal} onOpenChange={setShowModal}>
            <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3'>
              {skills.map((skill) => (
                <SkillCard
                  skill={skill}
                  delay={Math.random() * 5}
                  key={skill.id}
                />
              ))}
            </div>
            <SkillModal open={showModal} />
          </Modal>
        ) : (
          <HelperComponent
            option='noElements'
            noElementsMessage='Nenhuma habilidade encontrada'
          />
        )
      ) : (
        <HelperComponent option={status} />
      )}
    </section>
  );
}
