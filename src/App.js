import "./App.css"; //CSS DE LA CLASE
import { Listaizq } from "./components/ListaIzquierda.js"; //Componente de contenedores
import { Listader } from "./components/ListaDerecha.js"; //Componente de contenedores

import {Mapa2} from "./components/Mapa2.js";
import {Mapita} from "./components/mapita2.js"
import {Tarjeta2} from "./components/tarjetacontenedor.js"



function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="logo-nombre">
          <div className="mover">
          <img
            className="logo"
            src={require("./imagenes/LogoPNG.png")}
            alt="logo.png"
          />
          <h1 className="Nombre">Bin-Go</h1>
          </div>
        </div>
        <div className="componentes">
          <div className="barra-izquierda">
            <Listaizq />
          </div>
          <div className="centro">
            <Mapita></Mapita>
          </div>
          <div className="barra-derecha">
            <Listader />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
