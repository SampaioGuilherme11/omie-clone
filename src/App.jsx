import "./App.css";
import Apresentacao from "./components/Apresentacao";
import Header from "./components/Header";
import SecaoBeneficios from "./components/SecaoBeneficios";
import TesteGratis from "./components/TesteGratis";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <div className="sticky top-0 left-0 z-50 bg-white">
        <Titulo />
        <Header />
      </div>
      <Apresentacao />
      <SecaoBeneficios />
      <TesteGratis/>
    </>
  );
}

export default App;
