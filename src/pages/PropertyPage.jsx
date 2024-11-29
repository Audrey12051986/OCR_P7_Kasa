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
          <Tags tags={property.tags} />
        </div>
        <div className="rating-and-host">
          <StarRating rating={property.rating} />
          <Host host={property.host} propertyId={property.id} />
        </div>
      </div>
      <div className="description-and-equipment">
        <Collapse title="Description" content={property.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {property.equipments.map((eq) => (
                <li key={eq}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default PropertyPage;
