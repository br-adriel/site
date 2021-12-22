import ItemFormacao from "./ItemFormacao";
import Section from "./Section";
import imgFormacao from "./../img/formacao.svg";
import estilo from "./Formacao.module.css";

const Formacao = () => {
  const formacoes = [
    {
      curso: "Informática",
      instituicao:
        "Instituto Federal de Ciência, Educação e Tecnologia do Rio Grande do Norte",
      inicio: "2017",
      fim: "2021",
    },
    {
      curso: "Sistemas de Informação",
      instituicao: "Universidade Federal do Rio Grande do Norte",
      inicio: "2021",
      fim: "Presente",
    },
  ];
  const renderizarFormacoes = (formacao, i) => {
    return (
      <ItemFormacao
        key={i}
        curso={formacao.curso}
        instituicao={formacao.instituicao}
        inicio={formacao.inicio}
        fim={formacao.fim}
      />
    );
  };
  return (
    <>
      <Section id="formacao" colReverse={true}>
        <div>
          <img src={imgFormacao} alt="" />
        </div>
        <div>
          <h2 className={estilo.titulo}>Formação acadêmica</h2>
          <div className={estilo.formacoes}>
            {formacoes.map(renderizarFormacoes)}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Formacao;
