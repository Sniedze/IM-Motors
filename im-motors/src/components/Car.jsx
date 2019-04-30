import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class Car extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(`https://5be00dbef2ef840013994a6d.mockapi.io/users/${params.carId}`)
      .then(e => e.json())
      .then(car => {
        console.log(car);
        this.setState({ car });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
