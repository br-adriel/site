import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ITheme } from '../ThemeSwitch/Themes';
interface Props {
  icon: any;
  link: string;
}

const SocialLink = ({ link, icon }: Props) => {
  return (
    <LinkTag
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </LinkTag>
  );
};

const LinkTag = styled(motion.a)`
  font-size: 30px;
  width: 55px;
  height: 55px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  background: ${({ theme }: { theme: ITheme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.3s background ease-in-out;

  &:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.secondary};
    color: #fff;
  }
`;

export default SocialLink;
