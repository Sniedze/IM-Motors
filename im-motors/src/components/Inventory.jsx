import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link, Route, Switch } from "react-router-dom";
import CarInfo from "./Car.jsx";
//import { Switch, Route, HashRouter } from "react-router-dom";
//import Subpage from "./Subpage.jsx";

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
    let person = this.state.data.map(item => (
      <>
        <Switch>
          <Route path="/inventory/:carId" component={CarInfo} />
          <Link to={`/inventory/${item.id}`}>
            <div key={item.id}>
              <h1 key={item.createdAt}>{item.name}</h1>
              <img key={item.comment} src={item.avatar} alt="Profile" />
            </div>
          </Link>
        </Switch>
      </>
    ));
    let link = (
      <Switch>
        <Route path="/inventory/:carId" component={CarInfo} />
        <Link to={`/inventory/${person.id}`}>{person}</Link>
      </Switch>
    );
    {
      return (
        <div>
          <Header />
          {link}
          <Footer />
        </div>
      );
    }
  }
}
// {/* <Route path="/inventory/:carId" component={CarInfo} /> */}
