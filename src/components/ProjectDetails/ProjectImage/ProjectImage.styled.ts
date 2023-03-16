import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ITheme } from '../../ThemeSwitch/Themes';

export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const AnimatedImgWrapper = motion(ImgWrapper);

export const LinksGroup = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;

  a {
    text-decoration: none;
    padding: 8px 10px;
    background: ${({ theme }: { theme: ITheme }) => theme.primary};
    color: #fff;
    transition: background 0.3s ease;
    border-radius: 5px;
  }

  a:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.secondary};
    color: #fff;
  }
`;
