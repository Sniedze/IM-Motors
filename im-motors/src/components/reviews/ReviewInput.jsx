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

    console.log("Name: ", name);
    console.log("Value: ", value);
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(this.state);
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
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  };

  render() {
    return (
      <div className="review-input">
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="name">
            <label>Name</label>
            <input
              onChange={this.handleChange}
              defaultValue={this.props.person}
              name="person"
              noValidate
            />
            {/* {this.props.errors.fullName.length > 0 && (
              <span className="errorMessage">{this.props.errors.fullName}</span>
            )} */}
          </div>
          <div className="feedback">
            <label>Your Feedback</label>
            <textarea
              onChange={this.handleChange}
              defaultValue={this.props.feedback}
              name="feedback"
              noValidate
            />
            {/* {this.props.errors.ssn.length > 0 && (
              <span className="errorMessage">{this.props.errors.ssn}</span>
            )} */}
          </div>

          <div className="stars">
            <label>Star Rating</label>
            <select
              onChange={this.handleChange}
              defaultValue={this.props.stars}
              name="stars"
              noValidate
            >
              <option value="" label="--" />
              <option key="five" value="5" label={"✩✩✩✩✩"} />
              <option key="four" value="4" label="✩✩✩✩" />
              <option key="three" value="3" label="✩✩✩" />
              <option key="two" value="2" label="✩✩" />
              <option key="one" value="1" label="✩" />
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
