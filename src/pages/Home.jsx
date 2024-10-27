import React from "react";
import homeBanner from "../assets/homeBanner.png";

const HomePage = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src={homeBanner} alt="Home Banner" />
        <h1>Chez vous, partout et ailleurs</h1>;
      </section>
    </div>
  );
};

export default HomePage;
