'use client';

import ISkill from '@/interfaces/ISkill';
import { useState } from 'react';
import HelperComponent from '../HelperComponent';
import Modal from '../Modal';
import SkillCard from '../SkillCard';
import SkillModal from '../SkillModal';

interface IProps {
  skills: ISkill[];
}

export default function SkillsSection({ skills }: IProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Habilidades</h2>
      {skills.length ? (
        <Modal open={showModal} onOpenChange={setShowModal}>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3'>
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
      )}
    </section>
  );
}
