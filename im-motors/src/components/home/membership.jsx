import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
class Membership extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Link to="/membership">
          <ul>
            <h2>Become a member </h2>
            <li>- Discount for the first purchase</li>
            <li>- Get free cinema tickets</li>
            <li>- Collect loyalty points</li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default Membership;
