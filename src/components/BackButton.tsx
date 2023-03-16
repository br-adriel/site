import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-bootstrap-icons';
import styled from 'styled-components';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <ArrowLeft title='Voltar' />
    </Button>
  );
};

const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default BackButton;
