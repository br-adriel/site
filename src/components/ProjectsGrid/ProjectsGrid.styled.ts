import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 1fr;
  width: 100%;
`;

export const AnimatedCardGrid = motion(CardGrid);