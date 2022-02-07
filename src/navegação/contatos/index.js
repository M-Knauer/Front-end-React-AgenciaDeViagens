import React from "react";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";


function Contatos() {
    return (
        <section>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div class="containers p-5">
                <div class="row">
                    <div class="col-3">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/9e5kGL5.jpg" alt="Ilhas maldivas" />
                            <div class="card-body">
                                <h3>Rio de Janeiro</h3>
                                <p>Rua da areia N&ordm; 21</p>
                                <p>Centro</p>
                                <p>(21) 5588 6611</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/oZE7B9y.jpg" alt="NY" />
                            <div class="card-body">
                                <h3>São Paulo</h3>
                                <p>Rua da lua N&ordm; 11</p>
                                <p>Centro</p>
                                <p>(11) 1122 3399</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/LrpLcQo.jpg" alt="Holanda" />
                            <div class="card-body">
                                <h3>Bahia</h3>
                                <p>Rua do mar N&ordm; 77</p>
                                <p>Centro</p>
                                <p>(77) 2233 7766</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    );
}
export default Contatos;
