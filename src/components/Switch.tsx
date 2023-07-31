import * as RadixSwitch from '@radix-ui/react-switch';

interface IProps {
  onChange: (value: boolean) => void;
  value: boolean;
  id?: string;
}

export default function Switch({ id, onChange, value }: IProps) {
  return (
    <RadixSwitch.Root
      id={id}
      checked={value}
      onCheckedChange={onChange}
      className='bg-white h-7 w-12 rounded-full relative data-[state=checked]:bg-blue-600 focus-visible:outline focus:outline-blue-600 focus:outline-2 focus:outline-offset-2'
    >
      <RadixSwitch.Thumb className='bg-blue-600 w-5 h-5 rounded-full block absolute top-1 left-1 data-[state=checked]:bg-white data-[state=checked]:left-auto data-[state=checked]:translate-x-6 transition-all' />
    </RadixSwitch.Root>
  );
}
