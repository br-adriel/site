import DefaultCard from '@/components/Card';
import { ITheme } from '@/components/ThemeSwitch/Themes';
import styled from 'styled-components';

export const Card = styled(DefaultCard)`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }: { theme: ITheme }) => theme.color};

  img {
    object-fit: contain;
    background: #fff;
    border-radius: 8px;
    padding: 4px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.35rem;
  }
`;
