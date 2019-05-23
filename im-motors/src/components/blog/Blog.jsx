import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import BlogContent from "./BlogContent";

const endpoint = "https://immotors-65ac.restdb.io/rest/articles";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; //Current state returns an empty array
  }

  componentDidMount() {
    fetch(endpoint, {
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
        
      });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <BlogContent articles={this.state.data} />
        <Footer />
      </div>
    );
  }
}
