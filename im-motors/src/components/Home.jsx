import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Reviews from "./reviews/Reviews";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="membership">
          <p>Become a member and get free cinema tickets</p>
        </div>
        <Reviews />
        <Footer />
      </div>
    );
  }
}
