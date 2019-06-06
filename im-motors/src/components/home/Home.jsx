import React, { Component } from "react";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";
import HomeFilter from "./filter/HomeFilter";
import Categories from "./Categories";
import TeenagerOffers from "./TeenagerOffers";
import LandingPFooter from "./landingPFooter";

import "../../../node_modules/video-react/dist/video-react.css";
import carBack from "../../assets/car-back.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Membership />
        <TeenagerOffers />
        <Categories />
        <HomeFilter />
        <Reviews />
       
        <img id="car-back" src={carBack} alt="back of the car" />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.6133721334145!2d-73.14261198505395!3d41.18659927928308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80c540ed85383%3A0x1f19914bf8341e26!2s1574+Stratford+Ave%2C+Stratford%2C+CT+06615%2C+USA!5e0!3m2!1sen!2sdk!4v1559070448677!5m2!1sen!2sdk"
            frameBorder="0"
            allowFullScreen
            title="AdressMap"
          />
        </div>
        <LandingPFooter />
        <p className="copyright">
          Copyright © IM Motors 2019. All rights reserved.
        </p>
      </div>
    );
  }
}
