import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ id, title, cover }) {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <img src={cover} alt={`Kasa - ${title}`} />
      <h2>{title}</h2>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
