import styled from 'styled-components';
import ContainerSection from '../ContainerSection';
import { ITheme } from '../ThemeSwitch/Themes';

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

export const ButtonLink = styled.a`
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }: { theme: ITheme }) => theme.primary};
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.secondary};
  }
`;

export const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;
