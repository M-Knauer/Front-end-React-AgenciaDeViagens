import React from "react";
import "./style.css";
function Carrosel() {
	return (
		<div id="carouselExampleCaptions" class="carousel slide text-center" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.imgur.com/Q7quyWo.jpg" class=" d-inline rounded w-50" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5><b>Egito</b></h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src="https://i.imgur.com/jrmmogJ.jpg" class="rounded d-inline w-50" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Holanda</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/z7teosV.jpg" class="rounded d-inline w-50 " alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Bahamas</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev w-75" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next w-75" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
	);
}
export default Carrosel;