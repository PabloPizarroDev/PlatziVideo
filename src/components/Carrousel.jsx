import React from "react";
import "../assets/styles/component/Carrousel.scss";

const Carrousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">{children}</div>
  </section>
);

export default Carrousel;
