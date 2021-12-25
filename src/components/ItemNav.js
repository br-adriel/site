import estilo from "./ItemNav.module.css";

const ItemNav = (props) => {
  if (props.ativo) {
    return (
      <li className={`${estilo.itemNav} ${estilo.ativo}`}>
        <a
          href={props.link}
          rel="noopener noreferrer"
          className={estilo.icone}
          title={props.nome}
        >
          {props.icone}
        </a>
        <div className={estilo.seletor}></div>
      </li>
    );
  }
  return (
    <li className={estilo.itemNav}>
      <a
        href={props.link}
        rel="noopener noreferrer"
        className={estilo.icone}
        title={props.nome}
      >
        {props.icone}
      </a>
      <div className={estilo.seletor}></div>
    </li>
  );
};

export default ItemNav;
