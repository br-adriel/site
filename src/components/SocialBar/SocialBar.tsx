import React from 'react';
import styled from 'styled-components';
import SocialLink from './SocialLink';

interface SocialItem {
  id: number | string;
  link: string;
  icon: any;
  title?: string;
}

interface Props {
  socialItems: SocialItem[];
}

const SocialBar: React.FC<Props> = ({ socialItems }) => {
  return (
    <FlexDiv>
      {socialItems.map((item) => (
        <SocialLink
          icon={item.icon}
          link={item.link}
          key={item.id}
          title={item.title}
        />
      ))}
    </FlexDiv>
  );
};

const FlexDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default SocialBar;
