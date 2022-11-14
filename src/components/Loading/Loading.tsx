import Spinner from './Spinner';
import * as S from './Loading.styled';

const Loading = () => {
  return (
    <S.AnimatedWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Spinner />
    </S.AnimatedWrapper>
  );
};

export default Loading;
