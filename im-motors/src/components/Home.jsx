import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="membership">
          <p>Become a member and get free cinema tickets</p>
        </div>
        <Footer />
      </div>
    );
  }
}
