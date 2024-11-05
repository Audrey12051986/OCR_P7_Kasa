import React from "react";

/**
 * Composant Tags affiche une liste de tags.
 /* @component*/
/* @param {Object} props
 * @param {string[]} props.tags - la liste de tags à afficher
 * @returns {JSX.Element} - un div contenant les tags comme éléments enfants*/

const Tags = ({ tags }) => {
  return (
    <div className="tagsContainer">
      {tags.map((item) => (
        <div key={item} className="tagsContainer__tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
