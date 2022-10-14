import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  & > img {
    width: 30%;
    max-height: 90vh;
  }
`;

export const ContentDiv = styled.div`
  flex-grow: 1;
`;
