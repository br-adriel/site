import { motion } from 'framer-motion';
import { Github, Linkedin } from 'react-bootstrap-icons';
import desktop_img from '../../assets/img/home_desktop.svg';
import SocialBar from '../SocialBar';
import * as S from './HelloSection.style';

const HelloSection = () => {
  const socialItems = [
    {
      id: 1,
      icon: <Github title='Github' />,
      link: 'https://github.com/br-adriel',
    },
    {
      id: 2,
      icon: <Linkedin title='LinkedIn' />,
      link: 'https://linkedin.com/in/adriel-fsantos',
    },
  ];

  return (
    <S.Section>
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Adriel Santos
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desenvolvedor Frontend
        </motion.h2>
        <SocialBar socialItems={socialItems} />
      </div>
      <img src={desktop_img} alt='' />
    </S.Section>
  );
};

export default HelloSection;
