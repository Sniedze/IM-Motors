import React, { Component } from "react";
import Footer from "../Footer.jsx";
import Membership from "./membership";
import TeenagerOffers from "./TeenagerOffers"
import Reviews from "../reviews/Reviews";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Membership />
        <TeenagerOffers/>
        <Reviews />
        <Footer />
      </div>
    );
  }
}
