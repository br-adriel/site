import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ContainerSection } from '../Container';

export const Section = styled(ContainerSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkillGrid = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AnimatedSkillGrid = motion(SkillGrid);
