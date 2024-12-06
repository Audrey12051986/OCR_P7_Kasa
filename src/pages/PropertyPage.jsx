import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";

import Carousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import StarRating from "../components/StarRating";
import Tags from "../components/Tags";

const PropertyPage = () => {
  // Récupérer les données du logement
  const { id } = useParams();
  const property = logementsData.find((l) => l.id === id);
  if (!property) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="property-page">
      <Carousel pictures={property.pictures} />
      <div className="property-info">
        <div>
          <h1>{property.title}</h1>
          <p>{property.location}</p>
          <Tags tags={property.tags} />
        </div>
        <div className="rating-and-host">
          <Host host={property.host} propertyId={property.id} />
          <StarRating rating={property.rating} />
        </div>
      </div>
      <div className="description-and-equipment">
        <Collapse title="Description">{property.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default PropertyPage;
