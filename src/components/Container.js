import estilo from "./Container.module.css";

const Container = (props) => {
  if (props.colReverse) {
    return (
      <div className={`${estilo.container} ${estilo["col-reverse"]}`}>
        {props.children}
      </div>
    );
  } else {
    return <div className={estilo.container}>{props.children}</div>;
  }
};

export default Container;
