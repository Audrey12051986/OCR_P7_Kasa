import React from "react";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import homeBanner from "../assets/bannerHome.png"; // Importez votre image de banner

const HomePage = () => {
  return (
    <div className="home">
      <Banner
        image={homeBanner}
        text="Chez vous, partout et ailleurs"
        className="banner--home"
      />
      <CardList />
    </div>
  );
};

export default HomePage;
