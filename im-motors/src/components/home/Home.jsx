import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";
import HomeFilter from "./filter/HomeFilter";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Membership />
        <HomeFilter />
        <Reviews />
        <Footer />
      </div>
    );
  }
}
