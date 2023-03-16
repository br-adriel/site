import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ITheme } from './ThemeSwitch/Themes';

const Card = styled(motion.div)`
  background: ${({ theme }: { theme: ITheme }) => theme.bg2};
  padding: 12px;
  border-radius: 5px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  box-shadow: 0 0 4px ${({ theme }: { theme: ITheme }) => theme.shadowSm};
  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 0 4px ${({ theme }: { theme: ITheme }) => theme.shadowMd};
  }
`;

export const ProjectCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }: { theme: ITheme }) => theme.color};

  img {
    border-radius: 5px;
    flex-grow: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export default Card;
