import styled from 'styled-components';
import { ContainerSection } from '../Container';

export const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 40px;

    img {
      max-width: 45%;
    }
  }

  @media screen and (min-width: 992px) {
    img {
      max-width: 50%;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`;
