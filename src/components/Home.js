import BarraSocial from "./BarraSocial";
import Section from "./Section";
import imgHome from "./../img/home.svg";

const Home = (props) => {
  return (
    <>
      <Section id="home" colReverse={false}>
        <div>
          <div>
            <h1>Olá, meu nome é Adriel</h1>
            <p>Sou universitário e aspirante a desenvolvedor web</p>
          </div>
          <BarraSocial />
        </div>
        <div>
          <img src={imgHome} alt="" />
        </div>
      </Section>
    </>
  );
};

export default Home;
