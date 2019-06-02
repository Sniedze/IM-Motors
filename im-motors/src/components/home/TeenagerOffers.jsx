import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/forward-arrow.png";

class TeenagerOffers extends Component {
  state = {};
  render() {
    return (
      <div className="offers-container">
        <Link to="teenagers-offers">
          <div className="offers">
            <h2>Special Offers for Teenage Drivers</h2>
            <img className="arrow" src={Arrow} alt="arrow"/>
          </div>
        </Link>
      </div>
    );
  }
}

export default TeenagerOffers;
