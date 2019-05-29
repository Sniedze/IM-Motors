import React from "react";
const closeButton = props => (
  <button className="close-button" onClick={props.closeMenu}>
    <span>&#x2715;</span>
  </button>
);
export default closeButton;
