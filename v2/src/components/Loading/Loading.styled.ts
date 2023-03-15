import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const AnimatedWrapper = motion(Wrapper);
