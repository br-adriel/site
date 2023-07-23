import LoadingSpinner from './LoadingSpinner';

export default function LoadingScreen() {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center'>
      <LoadingSpinner />
    </section>
  );
}
