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
import { GetServerSideProps } from 'next';

interface IProps {
  experiences: IExperience[];
  skills: ISkill[];
  education: IEducation[];
  latestProjects: IProject[];
}

export default function index({
  education,
  experiences,
  latestProjects,
  skills,
}: IProps) {
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

export const getStaticProps: GetServerSideProps = async () => {
  const [experiences, skills, education, latestProjects] = await Promise.all([
    await ExperienceController.getAll(),
    await SkillController.getAll(),
    await EducationController.getAll(),
    await ProjectController.getLatest(),
  ]);
  return {
    props: {
      experiences,
      skills,
      education,
      latestProjects,
    },
  };
};
