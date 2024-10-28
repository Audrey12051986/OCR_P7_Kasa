import React from "react";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
//import Rental from "../../src/data/logements.json";

const HomePage = () => {
  return (
    <div className="home">
      <Banner />
      <CardList />
    </div>
  );
};

export default HomePage;
