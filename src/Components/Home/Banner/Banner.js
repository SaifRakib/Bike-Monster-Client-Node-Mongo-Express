import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://i.ibb.co/JHjvhbg/banner-image-163046871461029.jpg"
              class="d-block w-100"
              alt="...."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">Born Of Greatness</h5>
              <p>
                The premium Suzuki Gixxer SF is a fully faired 155cc motorcycle
                which has been developed in the same wind-tunnel where the
                legendary Hayabusa.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://i.ibb.co/X2bx1xf/banner-image-162142421336744.jpg"
              class="d-block w-100"
              alt="...."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">MODERN CRUISER Intruder</h5>
              <p>
                THE MODERN CRUISER Unique exposure to Suzuki's international
                Intruder heritage. THE INTRUDER is sporty, also brings in a feel
                of Luxury with its flowing.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://i.ibb.co/XxgbJ87/banner-image-162142471785377.jpg"
              class="d-block w-100"
              alt="...."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-uppercase">Bandit the street king</h5>
              <p>
                Bandit is designed to provide a comfortable ride. Suzuki applies
                the characteristics of the GSX series which has superior engine
                performance.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
