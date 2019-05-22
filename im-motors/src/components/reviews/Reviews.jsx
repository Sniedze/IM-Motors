import React, { Component } from "react";
import ReviewInput from "./ReviewInput";
import ReviewPosts from "./ReviewPosts";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchingData() {
    fetch("https://immotors-65ac.restdb.io/rest/reviews", {
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
  componentDidMount() {
    this.fetchingData();
    this.timer = setInterval(() => this.fetchingData(), 2000);
  }
  render() {
    return (
      <div className="reviews">
        <h2>Customers about IM Motors:</h2>
        <ReviewPosts posts={this.state.data} />
        <ReviewInput />
      </div>
    );
  }
}
