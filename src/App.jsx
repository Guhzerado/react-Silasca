import Hello from "./componentes/OlaMundo";
import Cabecalho from "./componentes/cabecalho";
import Cartao from "./componentes/cartao";
import Rodape from "./componentes/rodape";

import './App.css'

function App(){
  return(
    <div className="container">
      <Cabecalho/>
      <Hello/>
      <Cartao/>
      <Rodape/>
    </div>

  )
}

export default App