import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

export default function Select(props: IProps) {
  return (
    <select
      {...props}
      className='text-black p-1 rounded focus:outline-2 focus-within:outline-none focus:outline-blue-600 focus:outline-offset-4 caret-blue-600'
    >
      {props.children}
    </select>
  );
}
