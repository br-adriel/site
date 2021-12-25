import estilo from "./Portfolio.module.css";
import imgTrailerFlix from "./../img/portfolio/trailerflix.jpg";
import imgMarkdown from "./../img/portfolio/markdown.jpg";
import imgBateria from "./../img/portfolio/drum-machine.jpg";
import imgCitacoes from "./../img/portfolio/citacoes.jpg";
import imgLandingPage from "./../img/portfolio/landing-page.jpg";
import imgDocumentation from "./../img/portfolio/documentation.jpg";
import imgSurveyForm from "./../img/portfolio/survey-form.jpg";
import imgJogoCobra from "./../img/portfolio/jogo-cobra.jpg";
import Projeto from "./Projeto";

const Portfolio = (props) => {
  const projetos = [
    {
      img: imgTrailerFlix,
      titulo: "Réplica da Netflix",
      url: "https://br-adriel.github.io/replica-netflix",
      codigo: "https://github.com/br-adriel/replica-netflix",
    },
    {
      img: imgMarkdown,
      titulo: "Visualizador de markdown",
      url: "https://br-adriel.github.io/markdown-previewer/",
      codigo: "https://github.com/br-adriel/markdown-previewer",
    },
    {
      img: imgBateria,
      titulo: "Bateria eletrônica",
      url: "https://br-adriel.github.io/drum-machine/",
      codigo: "https://github.com/br-adriel/drum-machine",
    },
    {
      img: imgCitacoes,
      titulo: "Citações aleatórias",
      url: "https://br-adriel.github.io/random-quote-machine/",
      codigo: "https://github.com/br-adriel/random-quote-machine",
    },
    {
      img: imgLandingPage,
      titulo: "Landing page",
      url: "https://br-adriel.github.io/landing-page-example/",
      codigo: "https://github.com/br-adriel/landing-page-example",
    },
    {
      img: imgDocumentation,
      titulo: "Página de documentação",
      url: "https://br-adriel.github.io/documentation-page/",
      codigo: "https://github.com/br-adriel/documentation-page",
    },
    {
      img: imgSurveyForm,
      titulo: "Formulário de pesquisa",
      url: "https://br-adriel.github.io/survey-form-page/",
      codigo: "https://github.com/br-adriel/survey-form-page",
    },
    {
      img: imgJogoCobra,
      titulo: "Joga da cobrinha",
      url: "https://br-adriel.github.io/jogo-cobrinha/",
      codigo: "https://github.com/br-adriel/jogo-cobrinha",
    },
  ];
  const renderProjetos = (proj, i) => {
    return (
      <Projeto
        key={i}
        img={proj.img}
        titulo={proj.titulo}
        url={proj.url}
        codigo={proj.codigo}
      />
    );
  };
  return (
    <section id="portfolio" className={estilo.section}>
      <div className={estilo.container}>
        <h2 className={estilo.titulo}>Portfólio</h2>
        <div className={estilo.portfolio}>{projetos.map(renderProjetos)}</div>
      </div>
    </section>
  );
};

export default Portfolio;
