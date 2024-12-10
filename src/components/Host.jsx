import React from "react";
import PropTypes from "prop-types";

const Host = ({ host }) => {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} />
      <p className="host__name">{host.name}</p>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Host;
