import React from "react";
import PropTypes from "prop-types";

const Tags = ({ tags }) => {
  return (
    <div className="tagsContainer">
      {tags.map((item) => (
        <div key={item} className="tagsContainer__tag">
          {item}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
