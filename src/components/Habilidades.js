import estilo from "./Habilidades.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faPython,
  faPhp,
  faLaravel,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Habilidade from "./Habilidade";
import Section from "./Section";
import imgHabilidades from "./../img/habilidades.svg";

const Habilidades = () => {
  const habilidades = [
    {
      nome: "HTML",
      icone: <FontAwesomeIcon icon={faHtml5} size="3x" color="#D84B24" />,
    },
    {
      nome: "CSS",
      icone: <FontAwesomeIcon icon={faCss3} size="3x" color="#006AB1" />,
    },
    {
      nome: "JavaScript",
      icone: <FontAwesomeIcon icon={faJs} size="3x" color="#D9C30B" />,
    },
    {
      nome: "Bootstrap",
      icone: <FontAwesomeIcon icon={faBootstrap} size="3x" color="#7E10F3" />,
    },
    {
      nome: "React",
      icone: <FontAwesomeIcon icon={faReact} size="3x" color="#02D1F4" />,
    },
    {
      nome: "Python",
      icone: <FontAwesomeIcon icon={faPython} size="3x" color="#3276AF" />,
    },
    {
      nome: "Django",
      icone: <FontAwesomeIcon icon={faPython} size="3x" color="#2AA473" />,
    },
    {
      nome: "PHP",
      icone: <FontAwesomeIcon icon={faPhp} size="3x" color="#5E7DB0" />,
    },
    {
      nome: "Laravel",
      icone: <FontAwesomeIcon icon={faLaravel} size="3x" color="#F72C1F" />,
    },
    {
      nome: "Git",
      icone: <FontAwesomeIcon icon={faGitAlt} size="3x" color="#E94E31" />,
    },
  ];
  const renderizarHabilidades = (habilidade, i) => {
    return (
      <Habilidade key={i} icone={habilidade.icone} nome={habilidade.nome} />
    );
  };
  return (
    <>
      <Section id="habilidades">
        <div>
          <h2 className={estilo.titulo}>Habilidades</h2>
          <div className={estilo.habilidades}>
            {habilidades.map(renderizarHabilidades)}
          </div>
        </div>
        <div>
          <img src={imgHabilidades} alt="" />
        </div>
      </Section>
    </>
  );
};

export default Habilidades;
