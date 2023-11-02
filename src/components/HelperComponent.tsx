'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import { useTranslations } from 'next-intl';

interface IProps {
  option: 'idle' | 'failed' | 'loading' | 'noElements';
  noElementsMessage?: string;
}

export default function HelperComponent({ option, noElementsMessage }: IProps) {
  const t = useTranslations('misc.helper-component');

  const helperComponents = {
    idle: <LoadingSpinner />,
    failed: <h3 className='text-xl'>{t('error')}</h3>,
    loading: <LoadingSpinner />,
    noElements: <h3 className='text-xl'>{noElementsMessage}</h3>,
  };

  return helperComponents[option];
}
