import { MotionProps } from 'framer-motion';

export const fadeInGrow = (delay: number = 0, duration: number = 0.4) => {
  return {
    exit: 'hidden',
    initial: 'hidden',
    transition: { duration, delay },
    variants: {
      hidden: {
        opacity: 0,
        scale: 0.4,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
    viewport: {
      once: true,
    },
    whileInView: 'visible',
  } as MotionProps;
};
