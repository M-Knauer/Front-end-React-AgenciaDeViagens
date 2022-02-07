import React from "react";
import "./stylo.css";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import Buscar from "../../componentes/busca";
import Quem_somos from "../../componentes/sobre";

function Home() {
    return (
        <section>
            <Header />
            <br/>
            <br/>
            <br/>
            <div class="jumbotron card card-image" id="jumbo">
                <div class="text-white text-center py-4 px-5">
                    <div>
                        <h2 class="card-title h1-responsive pt-4 mb-4 font-bold"><strong>Bem vindo a GoodTrip</strong></h2>
                        <p class="text-white mx-2 mb-2">Sua melhor experiência com viagens aéreas!</p>
                        <p class="text-white mx-2 mb-2">Confira nossas promoções! temos os melhores com os melhores destinos</p>
                        <a class="btn btn-warning btn-lg shadow-lg mb-5 rounded" href="http://localhost:3000/Promocoes">
                            Promoções
                        </a>
                    </div>
                </div>
            </div>
            <Buscar />
            <br />
            <br />
            <Quem_somos />
            <Footer />
        </section>
    );
}
export default Home;