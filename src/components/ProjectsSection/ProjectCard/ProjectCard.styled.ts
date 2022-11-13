import styled from 'styled-components';
import DefaultCard from '../../Card';
import { ITheme } from '../../ThemeSwitch/Themes';

export const Card = styled(DefaultCard)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    border-radius: 5px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  a {
    color: ${({ theme }: { theme: ITheme }) => theme.color};
    text-decoration: none;
  }
`;
