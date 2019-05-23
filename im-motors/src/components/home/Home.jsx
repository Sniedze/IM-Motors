import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";

export default class Home extends Component {
  
  render() {
    return (
      <div className="home">
        <Header />
        <Membership />
        <Reviews />
        <Footer />
      </div>
    );
  }
}
