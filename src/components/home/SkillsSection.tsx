'use client';

import { Root as DRoot } from '@radix-ui/react-dialog';
import SkillCard from '../SkillCard';
import SkillModal from '../SkillModal';

export default function SkillsSection() {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Habilidades</h2>
      <DRoot>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3'>
          <SkillCard />
        </div>
        <SkillModal />
      </DRoot>
    </section>
  );
}
