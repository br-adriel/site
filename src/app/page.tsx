import ExperienceSection from '@/components/home/ExperienceSection';
import HelloSection from '@/components/home/HelloSection';
import SkillsSection from '@/components/home/SkillsSection';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <HelloSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
}
