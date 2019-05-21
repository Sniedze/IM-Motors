import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Reviews from "./Reviews";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: ""
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="membership">
          <p>Become a member and get free cinema tickets</p>
        </div>
        <Reviews reviews={this.state.reviews} />
        <Footer />
      </div>
    );
  }
}
