import "./App.css";
import Apresentacao from "./components/Apresentacao";
import DepoimentoClientes from "./components/DepoimentoClientes";
import Filiados from "./components/Filiados";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Iode from "./components/Iode";
import Marcas from "./components/Marcas";
import SecaoBeneficios from "./components/SecaoBeneficios";
import SobreMercado from "./components/SobreMercado";
import TesteGratis from "./components/TesteGratis";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <div className="sticky top-0 left-0 z-50">
        <Titulo />
        <Header />
      </div>
      <Apresentacao />
      <SecaoBeneficios />
      <TesteGratis />
      <SobreMercado />
      <Filiados />
      <DepoimentoClientes />
      <Marcas />
      <Iode />
      <Footer/>
    </>
  );
}

export default App;
