import React, { Component } from "react";

export default class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      feedback: "",
      stars: ""
    };
  }
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;

    fetch("https://immotors-65ac.restdb.io/rest/reviews", {
      async: true,
      crossDomain: true,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      },
      processData: false,
      body: JSON.stringify(data)
    }).then(response => {
      response.json();
    });
    event.target.reset();
  };

  render() {
    return (
      <div className="review-input">
        <h2>Your opinion matters</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="name form-group">
            <label>Name</label>
            <input
              onChange={this.handleChange}
              defaultValue={this.props.person}
              name="person"
              noValidate
              className="form-control"
            />
          </div>
          <div className="feedback form-group">
            <label>Your Feedback</label>
            <textarea
              onChange={this.handleChange}
              defaultValue={this.props.feedback}
              name="feedback"
              noValidate
              className="form-control"
            />
          </div>

          <div className="stars ">
            <label className="my-1 mr-2">Rate Us</label>
            <select
              onChange={this.handleChange}
              defaultValue={this.props.stars}
              name="stars"
              noValidate
              className="custom-select my-1 mr-sm-2"
              id="rate-input"
            >
              <option value="" label="--" />
              <option key="five" value="5" label="✩✩✩✩✩" />
              <option key="four" value="4" label="✩✩✩✩" />
              <option key="three" value="3" label="✩✩✩" />
              <option key="two" value="2" label="✩✩" />
              <option key="one" value="1" label="✩" />
            </select>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary my-1"
          />
        </form>
      </div>
    );
  }
}
