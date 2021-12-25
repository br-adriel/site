import "./App.css";
import Home from "./components/Home";
import Formacao from "./components/Formacao";
import Habilidades from "./components/Habilidades";
import Experiencias from "./components/Experiencias";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
