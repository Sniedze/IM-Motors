import React, { Component } from "react";
import Footer from "./Footer.jsx";
import { Link, Route, Switch } from "react-router-dom";
import CarInfo from "./Car.jsx";
import Arrow from "../assets/arrow.png";

//import SortByPriceButtons from "./sortByPrice";
//import { url } from "inspector";

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "https://immotors-65ac.restdb.io/rest/cars",
      searchQuery: "",
      fetchSettings: {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5ce2d6b1780a473c8df5c9ef",
          "cache-control": "no-cache"
        }
      },
      data: []
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const make = urlParams.get("make");
    const model = urlParams.get("model");
    const year = urlParams.get("year");
    const type = urlParams.get("type");
    const byPrice = urlParams.get("byPrice");
    let searchQuery = "?q={}";
    let hint = `&h={"$orderby": {"Price": ${byPrice}}}`;
    if (make) {
      //make is the minimum requirement for
      searchQuery = `?q={"Manufacturer":"${make}"}`;
      if (model) {
        searchQuery = `?q={"Manufacturer":"${make}", "Model": "${model}"}`;
      }
      if (year) {
        searchQuery = `?q={"Manufacturer":"${make}", "Model": "${model}", "Year":"${year}"}`;
      }
    }
    if (type) {
      if (type === "Family") {
        searchQuery = `?q={"IsFamilyCar": true}`;
      } else if (type === "Under5000") {
        searchQuery = `?q={"Price":{"$lt":5000}}`;
      } else {
        searchQuery = `?q={"Type":"${type}"}`;
      }
    }
    this.setState({ searchQuery: searchQuery });
    this.fetchWithQuery(searchQuery, hint);
  }
  fetchWithQuery(query, hint) {
    fetch(this.state.endpoint + query + hint, this.state.fetchSettings).then(
      res => {
        res.json().then(result => {
          this.setState({ data: result });
        });
      }
    );
  }
  priceSort(direction) {
    let hint;
    if (direction === "Asc") {
      hint = '&h={"$orderby": {"Price": 1}}';
    }
    if (direction === "Desc") {
      hint = '&h={"$orderby": {"Price": -1}}';
    }
    this.fetchWithQuery(this.state.searchQuery, hint);
  }

  render() {
    let carsLinks = this.state.data.map(item => (
      <div className="car" key={item._id}>
        <Link to={`/inventory/${item._id}`}>
          <h2>
            {item.Year} {item.Manufacturer} {item.Model}
            {""} {item.Engine}
          </h2>
          <img
            key={item.comment}
            src={`https://immotors-65ac.restdb.io/media/${item.MainImage}`}
            alt="Profile"
          />
          <p>Price: ${item.Price}</p>
          <p className="member-price">
            Member`s price: <span> ${item.MemberPrice}</span>
          </p>
          <p>Mileage: {item.Mileage} mi</p>
          <img className="arrow" src={Arrow} alt="arrow" />
        </Link>
      </div>
    ));
    let inventoryNav = (
      <Switch>
        <Route path="/inventory/:carId" component={CarInfo} />
        <div className="carList">
          <h3>By Price</h3>
          <button onClick={() => this.priceSort("Asc")}>Ascending</button>
          <button onClick={() => this.priceSort("Desc")}>Descending</button>
          {/* <SortByPriceButtons currentInventory={this.state.data} /> */}
          {carsLinks}
        </div>
      </Switch>
    );

    return (
      <>
        {inventoryNav}
        <Footer />
      </>
    );
  }
}
