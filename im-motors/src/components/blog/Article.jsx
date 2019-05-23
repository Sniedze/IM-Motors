import React, { Component } from "react";

export default class Article extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    fetch(`https://immotors-65ac.restdb.io/rest/articles/${params.articleId}`, {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      }
    })
      .then(e => e.json())
      .then(article => {
        this.setState({ data: article });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.Title}</h1>
        <img
          alt={this.state.data.alt}
          src={`https://immotors-65ac.restdb.io/media/${
            this.state.data.BigImage
          }`}
        />
        }<p className="short-description">{this.state.data.LongDescription}</p>
        
      </div>
    );
  }
}
