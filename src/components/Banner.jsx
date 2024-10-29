/*import React from "react";
//import homeBanner from "../assets/homeBanner.png";

const Banner = ({ bannerLocation, children }) => {
  return (
    <section className={`banner banner--${bannerLocation}`}>
      <div className="banner__container">{children}</div>
    </section>
  );
};

export default Banner;*/

/*<img src={homeBanner} alt="Home Banner" />
      <h1>Chez vous, partout et ailleurs</h1>;*/

import React from "react";
import PropTypes from "prop-types"; // N'oubliez pas d'importer PropTypes

const Banner = ({ image, text, className }) => {
  return (
    <section
      className={`banner ${className || ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner__container">{text && <h1>{text}</h1>}</div>
    </section>
  );
};

// Ajout de la validation des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string, // text est optionnel
  className: PropTypes.string, // className est optionnel
};

// Ajout des valeurs par défaut
/*Banner.defaultProps = {
  text: "",
  className: "",
};*/

export default Banner;
