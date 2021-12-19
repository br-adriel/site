import React from "react";
import estilo from "./Section.module.css";

const Section = (props) => {
  return (
    <section id={props.id} className={estilo.section}>
      {props.children}
    </section>
  );
};

export default Section;
