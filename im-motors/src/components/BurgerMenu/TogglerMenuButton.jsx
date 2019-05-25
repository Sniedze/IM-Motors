import React from "react";
const toggleButton = props => (
  <button onClick={props.click} className="toggle-button">
    <div className="toggle-line" />
    <div className="toggle-line" />
    <div className="toggle-line" />
  </button>
);

export default toggleButton;
