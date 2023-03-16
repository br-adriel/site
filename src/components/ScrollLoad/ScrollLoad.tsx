import { useEffect, useId } from 'react';
import * as S from './ScrollLoad.styled';

interface IProps {
  children?: any;
  onScrollEnd: any;
}

const ScrollLoad: React.FC<IProps> = ({ children, onScrollEnd }) => {
  const htmlId = useId();

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) onScrollEnd();
    }, {});

    obs.observe(document.getElementById(`scrollLoad${htmlId}`) as Element);
    return () => obs.disconnect();
  }, []);

  return (
    <S.Wrapper>
      {children}
      <S.ScrollEnd id={`scrollLoad${htmlId}`} />
    </S.Wrapper>
  );
};

export default ScrollLoad;
