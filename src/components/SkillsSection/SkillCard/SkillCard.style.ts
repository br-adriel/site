import styled from 'styled-components';
import DefaultCard from '../../Card';

export const Card = styled(DefaultCard)`
  img {
    width: 20%;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-weight: 500;
    font-size: 1.35rem;
  }
`;