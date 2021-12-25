import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faGraduationCap,
  faLightbulb,
  faHistory,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import ItemNav from "./ItemNav";
import estilo from "./Nav.module.css";
import { useState, useEffect } from "react";

const Nav = (props) => {
  // itens da navbar
  const itensNav = [
    {
      nome: "Apresentação",
      link: "#home",
      icone: <FontAwesomeIcon icon={faUserCircle} size="2x" />,
    },
    {
      nome: "Formação acadêmica",
      link: "#formacao",
      icone: <FontAwesomeIcon icon={faGraduationCap} size="2x" />,
    },
    {
      nome: "Habilidades",
      link: "#habilidades",
      icone: <FontAwesomeIcon icon={faLightbulb} size="2x" />,
    },
    {
      nome: "Experiência profissional",
      link: "#experiencias",
      icone: <FontAwesomeIcon icon={faHistory} size="2x" />,
    },
    {
      nome: "Portfólio",
      link: "#portfolio",
      icone: <FontAwesomeIcon icon={faFileCode} size="2x" />,
    },
  ];

  // lida com a mudanca de sessoes
  const [navAtual, setNavAtual] = useState("#home");

  const verificarMudanca = () => {
    let alturaTotal = window.scrollY;
    let alturaPercorrida = 0;

    for (let i = 0; i < props.secAlt.length; i++) {
      if (alturaTotal < props.secAlt[i].altura + alturaPercorrida) {
        setNavAtual(`#${props.secAlt[i].id}`);
        console.log(`percorrido: ${alturaPercorrida}`);
        break;
      }
      alturaPercorrida += props.secAlt[i].altura;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", verificarMudanca);
  });

  const renderizarItemNav = (item) => {
    if (navAtual === item.link) {
      return (
        <ItemNav
          key={item.link}
          nome={item.nome}
          link={item.link}
          icone={item.icone}
          ativo={true}
        />
      );
    }
    return (
      <ItemNav
        key={item.link}
        nome={item.nome}
        link={item.link}
        icone={item.icone}
        ativo={false}
      />
    );
  };
  return (
    <nav className={estilo.nav}>
      <ul className={estilo.itens}>{itensNav.map(renderizarItemNav)}</ul>
    </nav>
  );
};

export default Nav;
