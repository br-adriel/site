import EducationSection from '@/components/home/EducationSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HelloSection from '@/components/home/HelloSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <HelloSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
}
