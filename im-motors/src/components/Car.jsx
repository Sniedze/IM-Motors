import React, { Component } from "react";
import KBB from "../assets/kbb.png";

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.renderMyData();
  }

  renderMyData = () => {
    const {
      match: { params }
    } = this.props;

    fetch(`https://immotors-65ac.restdb.io/rest/cars/${params.carId}`, {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      }
    })
      .then(e => e.json())
      .then(car => {
        this.setState({ data: car });
      });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="one-car">
        <h1>
          {this.state.data.Year} {this.state.data.Manufacturer}{" "}
          {this.state.data.Model} {this.state.data.Engine}
        </h1>
        <img
          key={this.state.data.comment}
          src={`https://immotors-65ac.restdb.io/media/${
            this.state.data.MainImage
          }`}
          alt="Profile"
        />
        <p>Price: ${this.state.data.Price}</p>
        <p className="member-price">
          Member`s Price: ${this.state.data.MemberPrice}
        </p>
        <p>Mileage: {this.state.data.Mileage} mi</p>
        <img className="kbb" src={KBB} alt="Kelly Blue Book icon" />
        <p className="kbb-price">${this.state.data.KBB}</p>
      </div>
    );
  }
}
