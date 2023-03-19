import styled from 'styled-components';
import * as Popover from '@radix-ui/react-popover';
import { ITheme } from '@/components/ThemeSwitch/Themes';
import { motion } from 'framer-motion';

export const Trigger = styled(Popover.Trigger)`
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  flex-grow: 1;
  font-family: var(--font-family);

  :hover {
    background: none;
  }
`;

export const Arrow = styled(Popover.Arrow)`
  fill: ${({ theme }: { theme: ITheme }) => theme.bg2};
`;

export const Content = styled(Popover.Content)`
  border-radius: 8px;
  width: min(400px, 100vw);
  box-shadow: 0 0 4px ${({ theme }: { theme: ITheme }) => theme.shadowMd};
  background-color: ${({ theme }: { theme: ITheme }) => theme.bg2};
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  will-change: transform, opacity;

  &[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }

  &[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }

  &[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }

  &[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
