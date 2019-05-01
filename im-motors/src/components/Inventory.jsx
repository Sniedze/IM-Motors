import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { NavLink, Route, Switch, HashRouter } from "react-router-dom";
import CarInfo from "./Car.jsx";
//import { Switch, Route, HashRouter } from "react-router-dom";
//import Subpage from "./Subpage.jsx";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    //this.handler = this.handler.bind(this);
  }
  componentDidMount() {
    fetch(`https://5be00dbef2ef840013994a6d.mockapi.io/users/`)
      .then(e => e.json())
      .then(result => {
        this.setState({ data: result });
      });
  }

  /*   handler() {
    this.setState({
      fullInventory: !false
    });
  } */
  render() {
    let person = this.state.data.map(item => (
      <>
        <NavLink
          to={`/inventory/${item.id}`}
          activeClassName="active"
          /* onClick={this.handler} */
        >
          <div key={item.id}>
            <h1 key={item.createdAt}>{item.name}</h1>
            <img key={item.comment} src={item.avatar} alt="Profile" />
          </div>
        </NavLink>
      </>
    ));
    {
      return (
        <div>
          <Header />
          <Route path="/inventory/:carId" component={CarInfo} />
          {person}
          <Footer />
        </div>
      );
    }
  }
}
