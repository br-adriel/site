import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  initial: object;
  animate: object;
  transition: object;
  icon: string;
}

const AnimatedIcon: React.FC<Props> = (props) => {
  return (
    <AnimatedImg
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      src={props.icon}
    />
  );
};

const AnimatedImg = styled(motion.img)`
  position: absolute;
`;

export default AnimatedIcon;
