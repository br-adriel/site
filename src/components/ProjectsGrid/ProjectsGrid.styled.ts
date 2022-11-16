import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  grid-auto-rows: 1fr;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AnimatedCardGrid = motion(CardGrid);
