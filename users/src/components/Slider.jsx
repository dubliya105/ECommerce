import React from 'react'
import p from "./image/Tall_Hero.jpg";
import r from "./image/raksha.jpg";
import d from "./image/d.jpg";
import ph from "./image/download.jpeg";

function Slider() {
  return (
    <div>
         <div
        id="carouselExampleFade"
        style={{ height: "50vh", zIndex: "-1" }}
        className="carousel slide carousel-fade mt-0"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={p}
              style={{ height: "100vh" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={r}
              style={{ height: "100vh" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={d}
              style={{ height: "100vh" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={ph}
              style={{ height: "100vh" }}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider