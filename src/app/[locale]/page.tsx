import EducationSection from '@/components/home/EducationSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import HelloSection from '@/components/home/HelloSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';
import EducationController from '@/controller/education.controller';
import ExperienceController from '@/controller/experience.controller';
import ProjectController from '@/controller/project.controller';
import SkillController from '@/controller/skill.controller';
import IEducation from '@/interfaces/IEducation';
import IExperience from '@/interfaces/IExperience';
import IProject from '@/interfaces/IProject';
import ISkill from '@/interfaces/ISkill';
import { Metadata } from 'next';

interface MetadataProps {
  params: { locale: string };
  searchParams: {};
}

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return messages.home.meta;
}

export default async function Home() {
  const [experiences, skills, education, latestProjects] = await Promise.all([
    (await ExperienceController.getAll()) as IExperience[],
    (await SkillController.getAll()) as ISkill[],
    (await EducationController.getAll()) as IEducation[],
    (await ProjectController.getLatest()) as IProject[],
  ]);

  return (
    <main className='flex flex-col'>
      <HelloSection />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <EducationSection education={education} />
      <ProjectsSection projects={latestProjects} />
    </main>
  );
}