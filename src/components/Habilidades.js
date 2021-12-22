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
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Habilidade from "./Habilidade";
import Section from "./Section";
import imgHabilidades from "./../img/habilidades.svg";

const Habilidades = () => {
  const habilidades = [
    {
      nome: "HTML",
      icone: <FontAwesomeIcon icon={faHtml5} size="3x" color="#D84B24" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "CSS",
      icone: <FontAwesomeIcon icon={faCss3} size="3x" color="#006AB1" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "JavaScript",
      icone: <FontAwesomeIcon icon={faJs} size="3x" color="#D9C30B" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "Bootstrap",
      icone: <FontAwesomeIcon icon={faBootstrap} size="3x" color="#7E10F3" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "React",
      icone: <FontAwesomeIcon icon={faReact} size="3x" color="#02D1F4" />,
      nivel: "Conhecimento básico",
    },
    {
      nome: "Python",
      icone: <FontAwesomeIcon icon={faPython} size="3x" color="#3276AF" />,
      nivel: "Conhecimento básico",
    },
    {
      nome: "Django",
      icone: <FontAwesomeIcon icon={faPython} size="3x" color="#2AA473" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "PHP",
      icone: <FontAwesomeIcon icon={faPhp} size="3x" color="#5E7DB0" />,
      nivel: "Conhecimento básico",
    },
    {
      nome: "Laravel",
      icone: <FontAwesomeIcon icon={faLaravel} size="3x" color="#F72C1F" />,
      nivel: "Conhecimento básico",
    },
    {
      nome: "Git",
      icone: <FontAwesomeIcon icon={faGitAlt} size="3x" color="#E94E31" />,
      nivel: "Conhecimento de trabalho",
    },
    {
      nome: "MySQL",
      icone: <FontAwesomeIcon icon={faDatabase} size="3x" color="#00758F" />,
      nivel: "Conhecimento básico",
    },
  ];
  const renderizarHabilidades = (habilidade, i) => {
    return (
      <Habilidade
        key={i}
        icone={habilidade.icone}
        nome={habilidade.nome}
        nivel={habilidade.nivel}
      />
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
