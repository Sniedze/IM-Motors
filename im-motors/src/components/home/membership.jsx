import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarImage from "../../assets/car-side.png";
import VideoLink from "../video/videoLink";
import Arrow from "../../assets/forward-arrow.png";
class Membership extends Component {
  state = {};
  render() {
    return (
      <div className="membership-container">
        <Link to="/membership">
          <section className="clickable-area">
            <ul>
              <h2>Become a member </h2>
              <li>- Discount for the first purchase</li>
              <li>- Get free cinema tickets</li>
              <li>- Collect loyalty points</li>
            </ul>
            <img className="arrow" src={Arrow} alt="arrow" />
          </section>
        </Link>
        <VideoLink />
        <img className="car-front" src={CarImage} alt="car" />
      </div>
    );
  }
}

export default Membership;
