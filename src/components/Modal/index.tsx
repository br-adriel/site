'use client';

import { Root } from '@radix-ui/react-dialog';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface IProps extends PropsWithChildren {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ children, onOpenChange, open }: IProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Root>
  );
}
