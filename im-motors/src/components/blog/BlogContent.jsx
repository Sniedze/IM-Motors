import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Article from "./Article.jsx";

export default class PersonalInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    let articleLinks = this.props.articles.map(item => (
      <Link to={`/blog/${item.id}`} key={`/blog/${item.id}`}>
        <div className="article">
          <h2>{item.Title}</h2>
          <img src={item.avatar} alt="Profile" />
          <p className="short-description">{item.LongDescription}</p>
          <p className="date">{item.date}</p>
        </div>
      </Link>
    ));
    return (
      <Switch>
        <Route path="/blog/:articleId" component={Article} />

        <nav>{articleLinks}</nav>
      </Switch>
    );
  }
}
