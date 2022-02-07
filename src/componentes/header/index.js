import React from "react";
import "./stylo.css";

function Header() {
  return (
    <header className="d-flex justify-content-center">
      <nav class="navbar navbar-expand navbar-light bg-info">
        <div class="container-fluid">
          <div class="border-bottom border-primary">
            <a class="navbar-brand" href="http://localhost:3000/Home"><b>GoodTrip</b></a>
            <a class="navbar-brand" href="http://localhost:3000/Home"><img className="logo" src="/imagens/cloud-haze2.svg" /></a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/Home">Home</a>
              </li>
              <li class="nav-item">
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/Destinos">Destinos</a>
              </li>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/Promocoes">Promoções</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/Contatos">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;