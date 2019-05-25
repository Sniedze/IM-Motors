import React, { Component } from "react";
import Footer from "../Footer.jsx";
import Membership from "./membership";
import Reviews from "../reviews/Reviews";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Membership />
        <Reviews />
        <Footer />
      </div>
    );
  }
}
