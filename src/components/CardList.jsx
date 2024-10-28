import React from "react";
import Card from "./Card";
import logements from "../data/logements.json";

function CardList() {
  return (
    <div className="cardsList">
      <div className="cardsList_gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
