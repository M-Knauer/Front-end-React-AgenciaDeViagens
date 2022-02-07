import react from "react";
import Home from "./navegação/Home";
import Promocoes from "./navegação/promoções";
import Contatos from "./navegação/contatos";
import Destinos from "./navegação/destinos";
function App() {
  const url = window.location.href;
  return (
    <div>
      {
        url === "http://localhost:3000/Home"
        ? <Home/>
        :url === "http://localhost:3000/Promocoes"
        ? <Promocoes/>
        :url === "http://localhost:3000/Destinos"
        ? <Destinos/>
        :url === "http://localhost:3000/Contatos"
        ? <Contatos/>
        : <Home/>
      }
    </div>


  );
}

export default App;
