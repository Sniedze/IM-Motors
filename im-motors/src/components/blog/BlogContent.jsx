import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    return this.props.articles.map(item => (
      <div className="article">
        <h2>{item.title}</h2>
        <h2>{item.SmallImage}</h2>
        <p className="short-description">{item.ShortDescription}</p>
        <p className="date">{item.CreationDate}</p>
      </div>
    ));
  }
}
