import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  flex-direction: row-reverse;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  img {
    max-width: 50%;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;
