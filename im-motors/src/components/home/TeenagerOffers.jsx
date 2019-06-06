import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/forward-arrow.png";

class TeenagerOffers extends Component {
  state = {};
  render() {
    return (
      <div className="offers-container">
        <Link to="teenagers-offers">
          <h2>Special Offers for Teenage Drivers</h2>
          <h3 id="gps">Extra safe cars with GPS tracking</h3>
          <img className="arrow" src={Arrow} alt="arrow" />
        </Link>
      </div>
    );
  }
}

export default TeenagerOffers;
