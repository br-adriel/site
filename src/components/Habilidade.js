import estilo from "./Habilidade.module.css";

const Habilidade = (props) => {
  return (
    <div className={estilo.habilidade} title={props.nome + " - " + props.nivel}>
      <div>{props.icone}</div>
      <p className={estilo.nome}>{props.nome}</p>
    </div>
  );
};

export default Habilidade;
