import React from "react";
import { useState, useRef, useEffect } from "react";
import Chevron from "../assets/arrow_bottom.png";
import PropTypes from "prop-types";

const Collapse = (props) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className={`collapse ${props.style}`}>
      <div onClick={toggleState} className="collapse__visible">
        <h2>{props.title}</h2>
        <img
          className={toggle ? "chevron" : "chevron rotated"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.children}</p>
      </div>
    </div>
  );
};

// Ajout de la validation des props
Collapse.propTypes = {
  style: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Ajout de valeurs par défaut pour les props
Collapse.defaultProps = {
  style: "",
  title: "",
};

export default Collapse;
