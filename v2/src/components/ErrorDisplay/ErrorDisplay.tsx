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
      <div>
        <h2>{title}</h2>
        {message ? <p>{message}</p> : null}
      </div>
      <Link className='btn' href='/'>
        Ir para a página inicial
      </Link>
    </S.Container>
  );
};

export default ErrorDisplay;
