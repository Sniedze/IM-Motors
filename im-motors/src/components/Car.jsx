import React, { Component } from "react";

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
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.name}</h1>
      </div>
    );
  }
}
