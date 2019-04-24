import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { NavLink } from "react-router-dom";
//import { Switch, Route, HashRouter } from "react-router-dom";
//import Subpage from "./Subpage.jsx";

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      endP: "https://5be00dbef2ef840013994a6d.mockapi.io/users"
    };
  }
  componentDidMount() {
    fetch(this.state.endP)
      .then(e => e.json())
      .then(result => {
        this.setState({ data: result });
      });
  }
  render() {
    let namesArr = this.state.data.map(item => (
      <>
        <NavLink to="/car" activeClassName="active">
          <div key={item.id}>
            <h1 key={item.createdAt}>{item.name}</h1>
            <img key={item.comment} src={item.avatar} alt="Profile" />
          </div>
        </NavLink>
      </>
    ));
    return (
      <div>
        <Header />
        {namesArr}
        <Footer />
      </div>
    );
  }
}
