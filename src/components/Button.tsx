import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export default function Button(props: IProps) {
  return (
    <button
      className='rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-500 focus:outline-2 focus:outline-offset-2 text-white'
      {...props}
    >
      {props.children}
    </button>
  );
}
