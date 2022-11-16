import { motion } from 'framer-motion';
import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  & > img {
    max-height: max(90vh, 90%);
    display: none;
    width: 30%;
  }

  @media screen and (min-width: 992px) {
    & > img {
      display: block;
    }
  }
`;

export const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AnimatedSkillGrid = motion(SkillGrid);
