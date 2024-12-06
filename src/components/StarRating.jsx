import React from "react";
import PropTypes from "prop-types";
import starIconActive from "../assets/star-active.png";
import starIconInactive from "../assets/star-inactive.png";

const StarRating = ({ rating }) => {
  //Fonction sécurisée pour convertir la prop 'rating' en un nombre avec une valeur par défault
  const safeRating = isNaN(Number(rating)) ? 0 : Number(rating);

  // Création du tableau [1,2,3,4,5]
  const range = [...Array(5)].map((_, i) => i + 1);

  return (
    <div className="rating__container">
      {range.map((rangeElem) => (
        <span key={rangeElem} className="rating__scale">
          <img
            src={safeRating >= rangeElem ? starIconActive : starIconInactive}
            alt={safeRating >= rangeElem ? "étoile active" : "étoile inactive"}
            className="rating__stars"
          />
        </span>
      ))}
    </div>
  );
};

// Validation de la prop `rating` pour s'assurer qu'il s'agit d'un nombre ou d'une chaîne de caractères convertible en nombre
StarRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Valeur par défaut pour `rating` au cas où il ne serait pas fourni
StarRating.defaultProps = {
  rating: 1, // Vous pouvez définir ici la note par défaut, comme 0 ou une autre valeur adaptée
};

export default StarRating;
