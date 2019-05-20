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
    fetch(
      `https://5cc0aaa482ec6a00149f3e37.mockapi.io/articles/${params.articleId}`
    )
      .then(e => e.json())
      .then(article => {
        this.setState({ data: article });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.Title}</h1>
        <img src={this.state.data.avatar} alt="Profile" />
        <p className="short-description">{this.state.data.ShortDescription}</p>
        <p className="date">{this.state.data.date}</p>
      </div>
    );
  }
}
