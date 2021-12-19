import "./App.css";
import BarraSocial from "./components/BarraSocial";
import Section from "./components/Section";
import imgHome from "./img/home.svg";

function App() {
  return (
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
  );
}

export default App;
