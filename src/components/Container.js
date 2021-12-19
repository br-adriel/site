import estilo from "./Container.module.css";

const Container = (props) => {
  return <div className={estilo.container}>{props.children}</div>;
};

export default Container;
