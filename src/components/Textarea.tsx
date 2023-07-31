import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export default function Textarea(props: IProps) {
  return (
    <textarea
      {...props}
      className={`text-black p-1 resize-y rounded focus:outline-2 focus-within:outline-none focus:outline-blue-600 focus:outline-offset-2 caret-blue-600 ${
        props.className || ''
      }`}
    />
  );
}
