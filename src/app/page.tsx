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

export default async function Page() {
  const { education, experiences, latestProjects, skills } = await getData();

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

export const getData = async () => {
  const [experiences, skills, education, latestProjects] = await Promise.all([
    (await ExperienceController.getAll()) as IExperience[],
    (await SkillController.getAll()) as ISkill[],
    (await EducationController.getAll()) as IEducation[],
    (await ProjectController.getLatest()) as IProject[],
  ]);
  return {
    experiences,
    skills,
    education,
    latestProjects,
  };
};
