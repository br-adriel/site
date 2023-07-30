import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-bootstrap-icons';
import Button from './Button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ArrowLeft title='Voltar' />
    </Button>
  );
}
