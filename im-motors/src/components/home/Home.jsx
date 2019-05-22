import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Membership from "./membership";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Membership />
        <Footer />
      </div>
    );
  }
}
