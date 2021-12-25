import "./App.css";
import Home from "./components/Home";
import Formacao from "./components/Formacao";
import Habilidades from "./components/Habilidades";
import Experiencias from "./components/Experiencias";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  const secAlt = [];
  useEffect(() => {
    const sections = document.getElementsByTagName("section");

    for (let i = 0; i < sections.length; i++) {
      secAlt.push({
        id: sections[i].id,
        altura: sections[i].offsetHeight,
      });
    }
  });
  return (
    <>
      <Nav secAlt={secAlt} />
      <Home />
      <Formacao />
      <Habilidades />
      <Experiencias />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
