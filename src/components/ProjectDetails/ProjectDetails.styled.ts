import styled from 'styled-components';
import Card from '../Card';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 10px;
`;

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectInfo = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProjectInfoTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;
