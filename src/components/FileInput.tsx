import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > { }

export default function FileInput(props: IProps) {
  return (
    <input
      {...props}
      className={`block w-full p-1 rounded border border-gray-400 focus:outline-2 focus-within:outline-none focus:outline-blue-600 focus:outline-offset-2 caret-blue-600 ${props.className || ''
        }`}
      type='file'
    />
  );
}
