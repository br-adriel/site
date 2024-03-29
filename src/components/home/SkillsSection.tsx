'use client';

import ISkill from '@/interfaces/ISkill';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import HelperComponent from '../HelperComponent';
import Modal from '../Modal';
import SkillCard from '../SkillCard';
import SkillModal from '../SkillModal';

interface IProps {
  skills: ISkill[];
  locale?: string;
}

export default function SkillsSection({ skills, locale }: IProps) {
  const t = useTranslations('home.page');

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>{t('skills-title')}</h2>
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
          <SkillModal open={showModal} locale={locale} />
        </Modal>
      ) : (
        <HelperComponent
          option='noElements'
          noElementsMessage={t('no-skills')}
        />
      )}
    </section>
  );
}
