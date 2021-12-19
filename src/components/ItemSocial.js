import estilo from "./ItemSocial.module.css";

const ItemSocial = (props) => {
  return (
    <div key={props.key} title={props.title} className={estilo["item-social"]}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.icone}
      </a>
    </div>
  );
};

export default ItemSocial;
