import React, { Component } from "react";
import Header from "./Header.jsx";
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
    fetch(`https://5be00dbef2ef840013994a6d.mockapi.io/users/`)
      .then(e => e.json())
      .then(result => {
        this.setState({ data: result });
      });
  }

  render() {
    let carsLinks = this.state.data.map(item => (
      <Link to={`/inventory/${item.id}`} key={`/inventory/${item.id}`}>
        <h1 key={item.createdAt}>{item.name}</h1>
        <img key={item.comment} src={item.avatar} alt="Profile" />
      </Link>
    ));
    let inventoryNav = (
      <Switch>
        <Route path="/inventory/:carId" component={CarInfo} />
        <nav>{carsLinks}</nav>
      </Switch>
    );

    return (
      <>
        <Header />
        {/* <SortButtons fetched={this.state.data} /> */}
        {inventoryNav}
        <Footer />
      </>
    );
  }
}
