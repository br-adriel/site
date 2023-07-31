import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > { }

export default function Input(props: IProps) {
  return (
    <input
      {...props}
      className={`text-black p-1 rounded focus:outline-2 focus-within:outline-none focus:outline-blue-600 focus:outline-offset-2 caret-blue-600 border border-gray-400 ${props.className || ''
        }`}
    />
  );
}
