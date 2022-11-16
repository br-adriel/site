import styled from 'styled-components';
import ContainerSection from '../ContainerSection';
import { ITheme } from '../ThemeSwitch/Themes';
import { Link } from 'react-router-dom';

export const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLink = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }: { theme: ITheme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.secondary};
    color: #fff;
  }
`;
