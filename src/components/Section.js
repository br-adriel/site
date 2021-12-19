import Container from "./Container";
import estilo from "./Section.module.css";

const Section = (props) => {
  return (
    <section id={props.id} className={estilo.section}>
      <Container colReverse={props.colReverse}>{props.children}</Container>
    </section>
  );
};

export default Section;
