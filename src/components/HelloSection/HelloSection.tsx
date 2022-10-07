import { At, Github, Linkedin } from 'react-bootstrap-icons';
import SocialBar from '../SocialBar';
import * as S from './HelloSection.style';
import desktop_img from '../../assets/img/home_desktop.svg';

const HelloSection = () => {
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
    <S.Section>
      <div>
        <h1>Adriel Santos</h1>
        <h2>Desenvolvedor Frontend</h2>
        <SocialBar socialItems={socialItems} />
      </div>
      <img src={desktop_img} alt='' />
    </S.Section>
  );
};

export default HelloSection;
