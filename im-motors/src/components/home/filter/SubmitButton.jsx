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
      let search = `?make=${this.props.make}`;
      if (this.props.year) {
        search = `?make=${this.props.make}&model=${this.props.model}&year=${
          this.props.year
        }`;
      } else if (this.props.model) {
        search = `?make=${this.props.make}&model=${this.props.model}`;
      }
      return (
        <Redirect
          push
          to={{
            pathname: "/inventory",
            search: search
          }}
        />
      );
    }

    return (
      <button id="hFilterSubmit" onClick={this.handleSubmit}>
        Search
      </button>
    );
  }
}
