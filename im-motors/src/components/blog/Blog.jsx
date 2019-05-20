import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import BlogContent from "./BlogContent";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; //Current state returns an empty array
  }

  componentDidMount() {
    fetch("https://immotors-65ac.restdb.io/rest/articles?max=2").then(res => {
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
