import estilo from "./ItemFormacao.module.css";

const ItemFormacao = (props) => {
  return (
    <div className={estilo.formacao}>
      <p className={estilo.titulo}>{props.curso}</p>
      <p className={estilo.instituicao}>{props.instituicao}</p>
      <p className={estilo.data}>
        {props.inicio} - {props.fim}
      </p>
    </div>
  );
};

export default ItemFormacao;
