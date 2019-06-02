import React, { Component } from "react";
import Footer from "./Footer.jsx";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import CarInfo from "./Car.jsx";
import Arrow from "../assets/arrow.png";

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "https://immotors-65ac.restdb.io/rest/cars",
      searchQuery: "",
      hint: "",
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
          const uniqueMakerList = Array.from(
            new Set(result.map(item => item.Manufacturer))
          );
          this.setState({ data: result, allMakers: uniqueMakerList });
        });
      }
    );
  }
  priceSort(direction) {
    let hint = `&h={"$orderby": {"Price": ${direction}}}`;
    this.fetchWithQuery(this.state.searchQuery, hint);
    this.setState({ hint: hint });
  }
  checkboxHandle = event => {
    if (event.target.checked) {
      let searchQuery = `?q={"Manufacturer":"${event.target.value}"}`;

      //this.setState({ searchQuery: searchQuery });
      this.fetchWithQuery(searchQuery, this.state.hint);
    }
  };
  render() {
    let makerOption = "";
    if (this.state.allMakers) {
      makerOption = this.state.allMakers.map(make =>
        //<Link to={{}}/>
        ({
          /* <form onChange={this.checkboxHandle}>
          <input
            type="checkbox"
            key={make}
            value={make}
            name={make}
            id={make}
          />
          <label htmlFor={make}>{make}</label>
        </form> */
        })
      );
    }
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
          <h3>Sort by Price</h3>
          <button id="priceAsc" onClick={() => this.priceSort(1)}>
            Ascending
          </button>
          <button id="priceDesc" onClick={() => this.priceSort(-1)}>
            Descending
          </button>
          {/* makerOption */}
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
