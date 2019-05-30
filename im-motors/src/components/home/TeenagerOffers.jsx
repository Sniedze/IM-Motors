import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeenagerOffers extends Component {
  state = {};
  render() {
    return (
      <div className="offres-container">
        <Link to="teenagers-offers">
          <div className="offers">
            <h2>Teenager special Offers</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default TeenagerOffers;
