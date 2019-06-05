import React, { Component } from "react";
import Footer from "../Footer";
import { Link, Route, Switch } from "react-router-dom";
import CarInfo from "../Car";
import "../../sass/specials.scss";
class TeenagerOffersPage extends Component {
  state = {
    data: []
  };
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
    let offersValue = this.state.data.filter(car => car.TeenagerOffer);
    const offersList = offersValue.map(offersList => (
      <div className="car" key={offersList._id}>
        <Link to={`/inventory/${offersList._id}`}>
          <h4>
            {offersList.Year} {offersList.Manufacturer} {offersList.Model}
            {""} {offersList.Engine}
          </h4>
          <img
            key={offersList.comment}
            src={`https://immotors-65ac.restdb.io/media/${
              offersList.MainImage
            }`}
            alt="Profile"
          />
          <p>Price: ${offersList.Price}</p>
          <p className="member-price">
            Member`s price: <span> ${offersList.MemberPrice}</span>
          </p>
          <p>Mileage: {offersList.Mileage} mi</p>
        </Link>
      </div>
    ));
    // console.log(offersList);
    // console.log(offersValue);
    let inventoryNav = (
      <Switch>
        <Route path="/inventory/:carId" component={CarInfo} />

        <div className="carList">
          <div className="car-post"> {offersList} </div>
        </div>
      </Switch>
    );
    return (
      <div className="special-offers">
        {inventoryNav}
        <Footer />
      </div>
    );
  }
}

export default TeenagerOffersPage;
