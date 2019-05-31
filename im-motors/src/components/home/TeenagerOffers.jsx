import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeenagerOffers extends Component {
  state = {};
  render() {
    return (
      <div className="offers-container">
        <Link to="teenagers-offers">
          <div className="offers">
            <h2>Special Offers for Teenagers</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default TeenagerOffers;
