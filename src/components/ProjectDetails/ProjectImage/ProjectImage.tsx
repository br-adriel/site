import { BoxArrowUpRight } from 'react-bootstrap-icons';
import * as S from './ProjectImage.styled';

interface IProps {
  src: string;
  alt?: string;
  visualizacao?: string;
  codigoFonte?: string;
}

const ProjectImage = ({ src, alt, visualizacao, codigoFonte }: IProps) => {
  return (
    <S.AnimatedImgWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src={src} alt={alt || ''} />

      <S.LinksGroup>
        {codigoFonte ? (
          <a href={codigoFonte} target='_blank' rel='noopener noreferrer'>
            Código fonte <BoxArrowUpRight />
          </a>
        ) : null}
        {visualizacao ? (
          <a href={visualizacao} target='_blank' rel='noopener noreferrer'>
            Visualizar <BoxArrowUpRight />
          </a>
        ) : null}
      </S.LinksGroup>
    </S.AnimatedImgWrapper>
  );
};

export default ProjectImage;
