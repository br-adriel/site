import ContainerSection from '../components/ContainerSection';
import desktop_img from '../assets/img/home_desktop.svg';
import styled from 'styled-components';
import { Github, Linkedin, At } from 'react-bootstrap-icons';
import SocialBar from '../components/SocialBar';

const Home = () => {
  const socialItems = [
    {
      id: 1,
      icon: <Github />,
      link: 'https://github.com/br-adriel',
      title: 'Github',
    },
    {
      id: 2,
      icon: <Linkedin />,
      link: 'https://linkedin.com/in/adriel-fsantos',
      title: 'Linkedin',
    },
    {
      id: 3,
      icon: <At />,
      link: 'mailto:adriel.fsantos@outlook.com',
      title: 'Email',
    },
  ];
  return (
    <HelloSection>
      <div>
        <h1>Adriel Santos</h1>
        <h2>Desenvolvedor Frontend</h2>
        <SocialBar socialItems={socialItems} />
      </div>
      <img src={desktop_img} alt='' />
    </HelloSection>
  );
};

const HelloSection = styled(ContainerSection)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  min-height: 100vh;

  img {
    max-height: 70vh;
  }

  h2 {
    margin-top: -0.75rem;
    margin-bottom: 10px;
  }
`;

export default Home;
