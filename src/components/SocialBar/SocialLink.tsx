import React from 'react';
import styled from 'styled-components';
import { ITheme } from '../ThemeSwitch/Themes';

interface Props {
  icon: any;
  link: string;
  title?: string;
}

const SocialLink: React.FC<Props> = ({ link, icon, title }) => {
  return (
    <LinkTag
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
    >
      {icon}
    </LinkTag>
  );
};

const LinkTag = styled.a`
  font-size: 30px;
  width: 55px;
  height: 55px;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  background: ${({ theme }: { theme: ITheme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.3s background ease-in-out;

  &:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.secondary};
  }
`;

export default SocialLink;
