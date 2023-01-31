import styled from 'styled-components';
import SocialLink from './SocialLink';

interface SocialItem {
  id: number | string;
  link: string;
  icon: any;
}

interface Props {
  socialItems: SocialItem[];
}

const SocialBar = ({ socialItems }: Props) => {
  return (
    <FlexDiv>
      {socialItems.map((item) => (
        <SocialLink icon={item.icon} link={item.link} key={item.id} />
      ))}
    </FlexDiv>
  );
};

const FlexDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default SocialBar;
