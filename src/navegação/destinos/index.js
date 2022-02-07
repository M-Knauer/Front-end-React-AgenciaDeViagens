import React from "react";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import "./stylo.css";


function Destinos() {
    return (
        
        <section>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="containers p-1">
                <div class="row">
                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="Ilhas maldivas" src="https://i.imgur.com/lUn0j7O.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Ilhas Maldivas</h4>
                                <p class="card-text">Viagem para Ilhas Maldivas por apenas R$ 3499,90</p>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="NY" src="https://i.imgur.com/GPfjrsA.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Nova York</h4>
                                <p class="card-text">Viagem para Nova York por apenas R$ 4499,90</p>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="Holanda" src="https://i.imgur.com/jrmmogJ.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Holanda</h4>
                                <p class="card-text">Viagem para Holanda por apenas R$ 4400,00</p>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="Egito" src="https://i.imgur.com/Q7quyWo.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Egito</h4>
                                <p class="card-text">Viagem para Egito por apenas R$ 2190,95</p>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="Dubai" src="https://i.imgur.com/BEoCyX5.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Dubai</h4>
                                <p class="card-text">Viagem para Dubai por apenas R$ 5339,90</p>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card" >
                            <img class="card-img-top" alt="Bahamas" src="https://i.imgur.com/z7teosV.jpg" />
                            <div class="card-body">
                                <h4 class="card-title">Bhamas</h4>
                                <pre class="card-text">Viagem para Bahamas por apenas R$ 4339,90</pre>
                                <a class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </section>

    );
}
export default Destinos;
