import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTelegram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import estilo from "./BarraSocial.module.css";
import ItemSocial from './ItemSocial'

const BarraSocial = (props) => {
  const itensSociais = [
    {
      nome: "Email",
      icone: <FontAwesomeIcon icon={faAt} size="2x" />,
      link: "mailto:adriel.fsantos@outlook.com",
    },
    {
      nome: "Github",
      icone: <FontAwesomeIcon icon={faGithub} size="2x" />,
      link: "https://github.com/br-adriel",
    },
    {
      nome: "Telegram",
      icone: <FontAwesomeIcon icon={faTelegram} size="2x" />,
      link: "https://t.me/adriel_faria",
    },
    {
      nome: "LinkedIn",
      icone: <FontAwesomeIcon icon={faLinkedinIn} size="2x" />,
      link: "https://www.linkedin.com/in/adriel-fsantos/",
    },
  ];
  const renderizaItens = (item, i) => {
    return (
      <ItemSocial
        key={i}
        title={item.nome}
        link={item.link}
        icone={item.icone}
      />
    );
  };
  return (
    <div className={estilo["barra-social"]}>{itensSociais.map(renderizaItens)}</div>
  );
};

export default BarraSocial;
