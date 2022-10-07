import React from 'react';
import styled from 'styled-components';

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
  background: #3a86ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.3s background ease-in-out;

  &:hover {
    background: #8338ec;
  }
`;

export default SocialLink;
