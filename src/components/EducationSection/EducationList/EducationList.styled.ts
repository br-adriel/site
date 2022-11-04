import DefaultCard from '../../Card';
import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Card = styled(DefaultCard)`
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
