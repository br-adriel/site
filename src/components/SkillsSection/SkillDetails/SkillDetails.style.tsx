import Card from '@/components/Card';
import styled from 'styled-components';

export const SkillDetails = styled(Card)`
  flex-grow: 1;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

export const SkillTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    object-fit: contain;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }
`;
