export const fadeInAnimation = (duration: number = 0.5, delay: number = 0) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration,
      delay,
    },
  };
};
