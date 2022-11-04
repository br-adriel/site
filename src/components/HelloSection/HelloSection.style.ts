import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  img {
    max-height: 70vh;
  }

  h2 {
    margin-top: -0.75rem;
    margin-bottom: 10px;
  }
`;
