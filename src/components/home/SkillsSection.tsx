import Modal from '../Modal';
import SkillCard from '../SkillCard';
import SkillModal from '../SkillModal';

export default function SkillsSection() {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Habilidades</h2>
      <Modal>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3'>
          {numbers.map((n) => {
            return <SkillCard delay={Math.random() * 5} key={n} />;
          })}
        </div>
        <SkillModal />
      </Modal>
    </section>
  );
}
