import Image from 'next/image';
import Link from 'next/link';
import * as S from './ErrorDisplay.styled';

interface IProps {
  title?: string;
  message?: string;
}

const ErrorDisplay: React.FC<IProps> = ({
  title = 'Um erro ocorreu',
  message,
}) => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <Image
          src='/assets/img/alert.svg'
          alt=''
          width={500}
          height={200}
          priority
        />
      </S.ImgWrapper>
      <h2>{title}</h2>
      {message ? <p>{message}</p> : null}
      <Link className='btn' href='/'>
        Ir para a página inicial
      </Link>
    </S.Container>
  );
};

export default ErrorDisplay;
