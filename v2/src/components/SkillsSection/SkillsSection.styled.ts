import { motion } from 'framer-motion';
import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  & > img {
    max-height: max(70vh, 70%);
    display: none;
    width: 25%;

    @-moz-document url-prefix() {
      min-width: 25%;
    }
  }

  @media screen and (min-width: 992px) {
    & > img {
      display: block;
    }
  }

  @media screen and (min-width: 992px) {
    & > img {
      width: 20%;

      @-moz-document url-prefix() {
        min-width: 20%;
      }
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

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AnimatedSkillGrid = motion(SkillGrid);
