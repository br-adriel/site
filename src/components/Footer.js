import estilo from "./Footer.module.css";

const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <footer className={estilo.footer}>
      <p>Adriel Faria, {ano}</p>
    </footer>
  );
};

export default Footer;
