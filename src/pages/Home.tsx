import EducationSection from '../components/EducationSection';
import HelloSection from '../components/HelloSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
  return (
    <main>
      <HelloSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
