'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';
import Button from './Button';
import { useTranslations } from 'next-intl';

export default function BackButton() {
  const t = useTranslations('misc');
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ArrowLeft title={t('back-button')} />
    </Button>
  );
}
