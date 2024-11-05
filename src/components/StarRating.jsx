import React from "react";
import PropTypes from "prop-types";

const StarScale = ({ rating }) => {
  // Création du tableau [1,2,3,4,5]
  const range = [...Array(5)].map((_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {range.map((rangeElem) => (
        <span key={rangeElem} className="w-6 h-6">
          <img
            src={
              parseInt(rating) >= rangeElem
                ? "/star-active.png"
                : "/star-inactive.png"
            }
            alt={
              parseInt(rating) >= rangeElem
                ? "étoile active"
                : "étoile inactive"
            }
            className="w-full h-full"
          />
        </span>
      ))}
    </div>
  );
};

// Validation de la prop 'rating' pour s'assurer qu'il s'agit d'un nombre ou d'une chaîne de caractères convertible en nombre
StarScale.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StarScale;
