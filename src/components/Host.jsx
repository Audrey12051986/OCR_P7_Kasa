import React from "react";
import PropTypes from "prop-types";

const Host = (props) => {
  return (
    <div className="host">
      <span className="host__name">{props.name}</span>
      <img src={props.picture} alt="Propriétaire" className="host__picture" />
    </div>
  );
};

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
