import React, { Component } from "react";
//import Footer from "../Footer.jsx";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";
import HomeFilter from "./filter/HomeFilter";
import Categories from "./Categories";
import TeenagerOffers from "./TeenagerOffers";
import LandingPFooter from "./landingPFooter";
import Footer from "../Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Membership />
        <TeenagerOffers />
        <Categories />
        <HomeFilter />
        <Reviews />
        <LandingPFooter />
        <Footer />
      </div>
    );
  }
}
