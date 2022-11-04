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
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.1);
  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 2px 6px rgba(200, 200, 200, 0.2);
  }
`;

export default Card;
