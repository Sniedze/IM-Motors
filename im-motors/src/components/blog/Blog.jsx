import React, { Component } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import BlogContent from "./BlogContent";
import { Link, Route, Switch } from "react-router-dom";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; //Current state returns an empty array
  }

  componentDidMount() {
    fetch("https://5cc0aaa482ec6a00149f3e37.mockapi.io/articles").then(res => {
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
