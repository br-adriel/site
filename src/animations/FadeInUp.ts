import { MotionProps } from 'framer-motion';

export const fadeInUpAnimation = (delay: number = 0) => {
  return {
    initial: 'hidden',
    variants: {
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: 15,
      },
    },
    transition: {
      duration: 0.5,
      delay: delay,
    },
    viewport: {
      once: true,
    },
    whileInView: 'visible',
  } as MotionProps;
};
