import ContainerSection from '../components/ContainerSection';
import desktop_img from '../assets/img/home_desktop.svg';
import styled from 'styled-components';

const Home = () => {
  return (
    <HelloSection>
      <div>
        <h1>Adriel Santos</h1>
        <h2>Desenvolvedor Frontend</h2>
      </div>
      <img src={desktop_img} alt='' />
    </HelloSection>
  );
};

const HelloSection = styled(ContainerSection)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  min-height: 100vh;

  img {
    max-height: 70vh;
  }

  h2 {
    margin-top: -0.75rem;
  }
`;

export default Home;
