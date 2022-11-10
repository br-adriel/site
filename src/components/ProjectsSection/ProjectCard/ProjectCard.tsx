import React from 'react';
import * as S from './ProjectCard.styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
  name: string;
  image: string;
  id: string;
}

const ProjectCard: React.FC<IProps> = ({ name, image, id }) => {
  return (
    <S.Card>
      <LazyLoadImage
        src={image}
        width='100%'
        height='auto'
        threshold={100}
        alt=''
      />
      <h3>{name}</h3>
    </S.Card>
  );
};

export default ProjectCard;
