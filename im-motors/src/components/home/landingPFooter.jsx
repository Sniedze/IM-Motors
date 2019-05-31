import React, { Component } from "react";
import carBack from "../../assets/car-back.png";
class LandingPFooter extends Component {
  state = {};
  render() {
    return (
      <div className="l-footer">
        <img id="car-back" src={carBack} alt="back of the car" />
      </div>
    );
  }
}

export default LandingPFooter;
