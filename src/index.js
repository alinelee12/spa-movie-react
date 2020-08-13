import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";
import Banner from "./containers/Banner";


import "bootswatch/dist/slate/bootstrap.min.css";
import "./index.css";


const App = () => {
  return (
    <Fragment>
      <header>
      <a href="#" id="logo"><img className="logo" src="/assets/images/Jmovie.png" /></a>
      </header>
       <section id="hero1" className="hero">
      <div className="inner">
        <div className="copy">
        <Banner />

        </div>
      </div>
    </section>
      <main className="bg-dark">
        <div className="container text-center">
          <h1>Busca de Filmes</h1>
          <p>Quer saber mais sobre o seu filme preferido? Faça uma busca pelo nome e fique pode dentro de todas as informações sobre ele:</p>
          <List />
        </div>
      </main>
      <footer>
        <div className="col-md-4 col-sm-12 offset-md-5 offset-sm-6 p-4">
          <p>Desenvolvido por Aline Pereira</p>
        </div>
      </footer>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));