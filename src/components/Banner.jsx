import React from "react";
import homeBanner from "../assets/homeBanner.png";

const Banner = () => {
  return (
    <section className="banner">
      <img src={homeBanner} alt="Home Banner" />
      <h1>Chez vous, partout et ailleurs</h1>;
    </section>
  );
};

export default Banner;
