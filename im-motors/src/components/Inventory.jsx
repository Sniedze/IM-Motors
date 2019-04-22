import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      endP: "https://5be00dbef2ef840013994a6d.mockapi.io/users"
    };
    this.switchPages = this.switchPages.bind(this);
  }
  switchPages() {}
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
        <h1 key={item.id}>{item.name}</h1>
        <img
          //key={item.name} fix the key issue
          src={item.avatar}
          alt="Profile"
          onClick={this.switchPages}
        />
      </>
    ));
    console.log(this.state.data);
    return (
      <div>
        <Header />
        {namesArr}
        <Footer />
      </div>
    );
  }
}
