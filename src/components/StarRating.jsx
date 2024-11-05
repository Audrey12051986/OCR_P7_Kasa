/*import React from "react";
import { Star } from "lucide-react";

/**
 * Composant Stars affiche une note avec un certain nombre d'étoiles pleines et vides.
 * @component
 * @param {Object} props
 * @param {number} props.rating - la valeur de la note (entre 0 et 5)
 * @returns {JSX.Element} - un div contenant les étoiles remplies et vides
 */

/*const Stars = ({ rating }) => {
  // Validation du rating entre 0 et 5
  const validatedRating = Math.max(0, Math.min(5, rating));

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < validatedRating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
        />
      ))}
      <span className="ml-2 text-gray-600">({validatedRating}/5)</span>
    </div>
  );
};

export default Stars;*/

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
