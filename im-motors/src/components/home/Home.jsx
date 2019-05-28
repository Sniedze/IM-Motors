import React, { Component } from "react";
import Footer from "../Footer.jsx";
import Membership from "./membership";
import TeenagerOffers from "./TeenagerOffers";
import Reviews from "../reviews/Reviews";
import HomeFilter from "./filter/HomeFilter";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Membership />
        <HomeFilter />
        {/* <TeenagerOffers/> */}
        <Reviews />
        <Footer />
      </div>
    );
  }
}
