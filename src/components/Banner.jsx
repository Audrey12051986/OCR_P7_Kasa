import React from "react";
import PropTypes from "prop-types"; // N'oubliez pas d'importer PropTypes

const Banner = ({ image, text, className }) => {
  return (
    <section
      className={`banner ${className || ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner__container">
        {text && (
          <div className="banner__title">
            <h1>{text}</h1>
          </div>
        )}
      </div>
    </section>
  );
};

// Ajout de la validation des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string, // text est optionnel
  className: PropTypes.string, // className est optionnel
};

export default Banner;
