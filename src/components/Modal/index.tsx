'use client';

import { Root } from '@radix-ui/react-dialog';
import { PropsWithChildren } from 'react';

export default function Modal({ children }: PropsWithChildren) {
  return <Root>{children}</Root>;
}
