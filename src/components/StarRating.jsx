import React from "react";
import PropTypes from "prop-types";

const StarScale = ({ rating }) => {
  //Fonction sécurisée pour convertir la prop 'rating' en un nombre avec une valeur par défault
  const safeRating = isNaN(Number(rating)) ? 0 : Number(rating);

  // Création du tableau [1,2,3,4,5]
  const range = [...Array(5)].map((_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {range.map((rangeElem) => (
        <span key={rangeElem} className="w-6 h-6">
          <img
            src={
              safeRating >= rangeElem
                ? "/star-active.png"
                : "/star-inactive.png"
            }
            alt={safeRating >= rangeElem ? "étoile active" : "étoile inactive"}
            className="w-full h-full"
          />
        </span>
      ))}
    </div>
  );
};

// Validation de la prop `rating` pour s'assurer qu'il s'agit d'un nombre ou d'une chaîne de caractères convertible en nombre
StarScale.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Valeur par défaut pour `rating` au cas où il ne serait pas fourni
StarScale.defaultProps = {
  rating: 1, // Vous pouvez définir ici la note par défaut, comme 0 ou une autre valeur adaptée
};

export default StarScale;
