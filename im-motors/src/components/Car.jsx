import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Inventory from "./Inventory.jsx";

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    fetch(`https://5be00dbef2ef840013994a6d.mockapi.io/users/${params.carId}`)
      .then(e => e.json())
      .then(car => {
        this.setState({ data: car });

        console.log(this.state.data);
      });
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <h1>{this.state.data.name}</h1>
        </div>
      );
    }
  }
}
