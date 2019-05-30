import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class SubmitButton extends Component {
  state = {
    redirect: ""
  };
  handleSubmit = () => {
    if (this.props.make) {
      this.setState({ redirect: true });
    } else {
      this.setState({ error: "Select make as a minimum." });
    }
  };
  render() {
    if (this.state.redirect) {
      ///const searchQuery =
      if (this.props.year) {
        return (
          <Redirect
            push
            to={{
              pathname: "/inventory",
              search: `?make=${this.props.make}&model=${
                this.props.model
              }&year=${this.props.year}`
            }}
          />
        );
      } else if (this.props.model) {
        return (
          <Redirect
            push
            to={{
              pathname: "/inventory",
              search: `?make=${this.props.make}&model=${this.props.model}`
            }}
          />
        );
      } else
        return (
          <Redirect
            push
            to={{
              pathname: "/inventory",
              search: `?make=${this.props.make}`
            }}
          />
        );
    }

    return (
      <button id="hFilterSubmit" onClick={this.handleSubmit}>
        Go!
      </button>
    );
  }
}
