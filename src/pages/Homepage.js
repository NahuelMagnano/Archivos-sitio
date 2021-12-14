import React from "react";
import '../styles/components/pages/Homepage.css';
import '../../src/App.css';


const HomePage = (props) => {
    return (
      <main className="maininicio">
        <div className="contenedorindex">
          <div className="pad">
            <div className="left">
              <img className="imagenindex" src = "images/autof1.png" alt="pngF1"/>
            </div>
            <div className="right">
              <h1>Bienvenidos a WorldTick</h1>
              <p>De la mano de la <span>Fórmula 1</span> presentamos esta web en la que encontrarán todos los datos necesarios para seguir día a día el campeonato de la <span>MÁXIMA CATEGORÍA</span>.</p>
              <p>Estarás habilitado a leer las últimas noticias del mundillo automovilístico, información sobre los equipos y corredores de los mismos.</p>
              <p>INCLUSO COMPRAR TICKETS A LOS PRÓXIMOS GRANDES PREMIOS!</p>
            </div>
          </div>
        </div>
      </main>
    );
}

export default HomePage;