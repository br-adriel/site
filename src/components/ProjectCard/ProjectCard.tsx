import React from 'react';
import * as S from './ProjectCard.styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  image: string;
  id: string;
}

const ProjectCard: React.FC<IProps> = ({ name, image, id }) => {
  return (
    <Link to={`/projetos/${id}`}>
      <S.Card>
        <LazyLoadImage
          src={image}
          width='100%'
          height='auto'
          threshold={300}
          alt=''
        />
        <h3>{name}</h3>
      </S.Card>
    </Link>
  );
};

export default ProjectCard;
