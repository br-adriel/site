import styled from 'styled-components';
import { ContainerDiv } from '../Container';

export const Container = styled(ContainerDiv)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;

  h2,
  p {
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const ImgWrapper = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  img {
    width: min(512px, 100%);
    height: auto;
  }
`;
