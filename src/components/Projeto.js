import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import estilo from "./Projeto.module.css";

const Projeto = (props) => {
  return (
    <div className={estilo.projeto}>
      <img src={props.img} alt="" />
      <div className={estilo.barra}>
        <span className={estilo.titulo}>{props.titulo}</span>
        <div className={estilo.acoes}>
          <a
            href={props.codigo}
            target="_blank"
            rel="noopener noreferrer"
            title="Código fonte"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Visualizar"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
