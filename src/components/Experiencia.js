import estilo from "./Experiencia.module.css";

const Experiencia = (props) => {
  const renderizartarefas = (tarefa, i) => {
    return <li key={i}>{tarefa}</li>;
  };
  return (
    <div className={estilo.experiencia}>
      <h3 className={estilo.titulo}>{props.titulo}</h3>
      <p className={estilo.data}>
        {props.inicio} - {props.fim}
      </p>
      <p className={estilo.responsabilidade}>{props.responsabilidade}</p>
      <ul className={estilo.tarefas}>{renderizartarefas(props.tarefas)}</ul>
    </div>
  );
};

export default Experiencia;
