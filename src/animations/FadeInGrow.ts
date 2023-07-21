export const fadeInGrow = () => {
  return {
    initial: { scale: 0.4, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.4 },
  };
};
