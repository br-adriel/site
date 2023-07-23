import LoadingSpinner from '@/components/LoadingSpinner';

interface IProps {
  option: 'idle' | 'failed' | 'loading' | 'noElements';
  noElementsMessage?: string;
}

export default function HelperComponent({ option, noElementsMessage }: IProps) {
  const helperComponents = {
    idle: <LoadingSpinner />,
    failed: (
      <h3 className='text-xl'>Um erro ocorreu, tente novamente mais tarde</h3>
    ),
    loading: <LoadingSpinner />,
    noElements: <h3 className='text-xl'>{noElementsMessage}</h3>,
  };

  return helperComponents[option];
}
