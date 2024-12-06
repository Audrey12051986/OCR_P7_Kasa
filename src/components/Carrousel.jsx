/*import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  if (!Array.isArray(pictures) || pictures.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel">
      {length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="carousel__button carousel__button--left"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="carousel__button carousel__button--right"
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )}

      {pictures.map((image, index) => (
        <div
          key={index}
          className={`carousel__image ${
            index === current ? "carousel__image--active" : ""
          }`}
        >
          <img src={image} alt={`Vue ${index + 1}`} className="carousel__img" />
          {length > 1 && (
            <span className="carousel__counter">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        {pictures.map((image, index) => (
          <div
            key={index}
            className={`carousel__image ${
              index === current ? "carousel__image--active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel__img"
            />
          </div>
        ))}
      </div>
      {length > 1 && (
        <div className="carousel__controls">
          <button
            onClick={prevImage}
            className="carousel__button carousel__button--left"
          >
            <FaChevronLeft size={24} className="carousel__button--icon" />
          </button>
          <button
            onClick={nextImage}
            className="carousel__button carousel__button--right"
          >
            <FaChevronRight size={24} className="carousel__button--icon" />
          </button>
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
