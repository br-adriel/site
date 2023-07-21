import { MotionProps } from 'framer-motion';

export const fadeInAnimation = (duration: number = 0.5, delay: number = 0) => {
  return {
    exit: 'hidden',
    initial: 'hidden',
    transition: {
      duration,
      delay,
    },
    variants: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
    viewport: {
      once: true,
    },
    whileInView: 'visible',
  } as MotionProps;
};
