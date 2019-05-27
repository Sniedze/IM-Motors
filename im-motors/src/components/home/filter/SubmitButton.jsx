import React, { Component } from "react";
export default class SubmitButton extends Component {
  handleSubmit = () => {
    console.log(this.props.model);
  };
  render() {
    return <button id="hFilterSubmit" onClick={this.handleSubmit} />;
  }
}
