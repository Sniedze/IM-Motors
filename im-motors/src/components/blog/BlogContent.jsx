import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Article from "./Article.jsx";
import Arrow from "../../assets/forward-arrow.png";

export default class BlogContent extends Component {
  render() {
    // const { errors } = this.props.state;

    let articleLinks = this.props.articles.map(item => (
      <div className="article" key={item._id}>
        <Link to={`/blog/${item._id}`}>
          <React.Fragment>
            <h2>{item.Title}</h2>
            <img
              alt={item.alt}
              src={`https://immotors-65ac.restdb.io/media/${item.SmallImage}`}
            />
            <p className="short-description">{item.ShortDescription}</p>
            <p className="date">{item.CreationDate.slice(0, 10)}</p>
            <img className="arrow" src={Arrow} alt="arrow" />
          </React.Fragment>
        </Link>
      </div>
    ));

    return (
      <Switch>
        <Route path="/blog/:articleId" component={Article} />
        <div className="blog-posts">{articleLinks}</div>
      </Switch>
    );
  }
}
