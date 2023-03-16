import { motion } from 'framer-motion';
import styled from 'styled-components';
import DefaultCard from '../../Card';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AnimatedList = motion(List);

export const Card = styled(DefaultCard)`
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
