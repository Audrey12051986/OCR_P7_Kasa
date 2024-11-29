import React from "react";
import PropTypes from "prop-types";

const SlideShows = ({ pictures }) => {
  return (
    <div className="slideshow">
      {pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`slide ${index}`} />
      ))}
    </div>
  );
};

SlideShows.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideShows;
