import React from "react";
import StarRating from "../components/StarRating";
import logements from "../data/logements.json";

//import Tags from "../components/Tags";
//import Slideshow from "../components/SlideShows";
//import TextSlider from "../components/TextSlider";

const PropertyPage = () => {
  return (
    <div>
      <StarRating rating={logements.rating} />
    </div>
  );
};

export default PropertyPage;
