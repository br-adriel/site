import { fadeInUpAnimation } from '@/animations/FadeInUp';
import IEducation from '@/interfaces/IEducation';
import { getShortMonthName } from '@/utils/date';
import { motion } from 'framer-motion';

interface IProps {
  education: IEducation;
  delay?: number;
}

export default function EducationCard({ education, delay }: IProps) {
  const animation = fadeInUpAnimation(0.2 * (delay || 0));

  const startMonthName: string = getShortMonthName(education.mesInicio);
  const endMonthName: string = education.mesFim
    ? getShortMonthName(education.mesFim)
    : '';

  const startDate: string = `${startMonthName} ${education.anoInicio}`;
  const endDate: string = education.anoFim
    ? `${endMonthName} ${education.anoFim}`
    : `Atualmente`;

  return (
    <motion.div
      {...animation}
      className='bg-alt_bg shadow rounded py-3 px-4 hover:shadow-md transition-shadow'
    >
      <h3 className='text-xl md:text-2xl mb-1 font-medium'>
        {education.curso} ({education.instituicao})
      </h3>
      <p className='text-md opacity-70'>{startDate + ' - ' + endDate}</p>
    </motion.div>
  );
}
