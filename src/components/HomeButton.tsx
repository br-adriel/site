import { House } from 'react-bootstrap-icons';
import LinkButton from './LinkButton';
import { useTranslations } from 'next-intl';

export default function HomeButton() {
  const t = useTranslations('misc');

  return (
    <LinkButton href='/'>
      <House title={t('home-button')} />
    </LinkButton>
  );
}
