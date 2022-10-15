import styled from 'styled-components';
import { ITheme } from '../../ThemeSwitch/Themes';

export const Card = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.bg2};
  padding: 12px;
  border-radius: 5px;
  display: flex;
  gap: 12px;

  img {
    width: 64px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.1));
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-weight: 500;
    font-size: 1.3rem;
  }
`;
