import EducationSection from '@/components/home/EducationSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HelloSection from '@/components/home/HelloSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function index() {
  return (
    <main className={`flex flex-col ${outfit.className}`}>
      <HelloSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
}
