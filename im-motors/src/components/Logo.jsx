import React, { Component } from "react";
import MotorsLogo from "../assets/blacklogo.png";
import { Link } from "react-router-dom";
export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <img className="logoImage" src={MotorsLogo} alt={"IM Motors logo"} />
      </Link>
    );
  }
}
