import React, { Component } from "react";

export default class HomeFilter extends Component {
  render() {
    const fetchSettings = {
      async: true,
      crossDomain: true,
      url: "https://immotors-65ac.restdb.io/rest/cars",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      }
    };
    fetch(fetchSettings)
      .then(e => e.json())
      .then(result => console.log(result));
    return <div />;
  }
}
