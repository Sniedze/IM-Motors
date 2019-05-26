import React, { Component } from "react";
import Footer from "./Footer.jsx";
import { Link, Route, Switch } from "react-router-dom";
import CarInfo from "./Car.jsx";

//import SortButtons from "./sortInventory";

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://immotors-65ac.restdb.io/rest/cars", {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      }
    }).then(res => {
      res.json().then(result => {
        this.setState({ data: result });
        console.log(this.state.data);
      });
    });
  }

  render() {
    let carsLinks = this.state.data.map(item => (
      <div className="car" key={item._id}>
        <Link
          to={`/inventory/${item._id}`}
          
        >
          <h4>
            {item.Year} {item.Manufacturer} {item.Model}
            {""} {item.Engine}
          </h4>
          <img
            key={item.comment}
            src={`https://immotors-65ac.restdb.io/media/${item.MainImage}`}
            alt="Profile"
          />
          <p>Price: ${item.Price}</p>
          <p className="member-price">Member`s Price: ${item.MemberPrice}</p>
          <p>Mileage: {item.Mileage} mi</p>
        </Link>
      </div>
    ));
    let inventoryNav = (
      <Switch>
        <Route path="/inventory/:carId" component={CarInfo} />
        <>
          <div className="carList">{carsLinks}</div>
        </>
      </Switch>
    );

    return (
      <>
        {/* <SortButtons fetched={this.state.data} /> */}
        {inventoryNav}
        <Footer />
      </>
    );
  }
}
