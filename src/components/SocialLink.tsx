import { Icon } from 'react-bootstrap-icons';

interface IProps {
  Icon: Icon;
  link: string;
  title: string;
}

export default function SocialLink({ Icon, link, title }: IProps) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
      className='text-3xl bg-blue-600 p-3 rounded-full hover:bg-violet-700'
    >
      {<Icon />}
    </a>
  );
}
