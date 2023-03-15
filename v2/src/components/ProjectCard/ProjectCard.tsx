import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard as Card } from '../Card';

interface IProps {
  name: string;
  image: string;
  id: string;
}

const ProjectCard: React.FC<IProps> = ({ name, image, id }) => {
  return (
    <Link href={`/projetos/${id}`}>
      <Card>
        <Image src={image} width='1067' height='600' alt='' />
        <h3>{name}</h3>
      </Card>
    </Link>
  );
};

export default ProjectCard;
