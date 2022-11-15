import styled from 'styled-components';
import { ITheme } from '../../ThemeSwitch/Themes';

export const ListItem = styled.li`
  border-radius: 5px;
  background: ${({ theme }: { theme: ITheme }) => theme.bg};
  transition: all 0.3 ease;
  list-style: none;
  color: ${({ theme }: { theme: ITheme }) => theme.color};

  &:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.primary};
    color: #fff;
  }

  a {
    display: block;
    padding: 6px;
  }

  a,
  a:hover {
    color: inherit;
  }
`;

export const ActiveListItem = styled(ListItem)`
  background: ${({ theme }: { theme: ITheme }) => theme.primary};
  color: #fff;
`;
