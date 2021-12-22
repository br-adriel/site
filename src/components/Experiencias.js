import estilo from "./Experiencias.module.css";
import Section from "./Section";
import imgExperiencias from "./../img/experiencias.svg";
import Experiencia from "./Experiencia";

const Experiencias = () => {
  const experiencias = [
    {
      titulo: "Voluntário - Projeto Telessaúde",
      inicio: "Julho 2021",
      fim: "Dezembro 2021",
      responsabilidade: "Desenvolvimento Back-end Django",
      tarefas: ["Implementação de models, forms e views"],
    },
  ];
  const renderizarExperiencias = (experiencia, i) => {
    return (
      <Experiencia
        key={i}
        titulo={experiencia.titulo}
        inicio={experiencia.inicio}
        fim={experiencia.fim}
        responsabilidade={experiencia.responsabilidade}
        tarefas={experiencia.tarefas}
      />
    );
  };
  return (
    <>
      <Section id="experiencias" colReverse={true}>
        <div>
          <img src={imgExperiencias} alt="" />
        </div>
        <div>
          <h2 className={estilo.titulo}>Experiência profissional</h2>
          <div className={estilo.experiencias}>
            {experiencias.map(renderizarExperiencias)}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Experiencias;
