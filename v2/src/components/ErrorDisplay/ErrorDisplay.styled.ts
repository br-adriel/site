import styled from 'styled-components';
import { ContainerDiv } from '../Container';

export const Container = styled(ContainerDiv)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 24px;

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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
