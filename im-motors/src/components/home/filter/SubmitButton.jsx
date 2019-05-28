import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
export default class SubmitButton extends Component {
  /* constructor(props) {
    super(props);
  } */
  handleSubmit = () => {
    if (this.props.make) {
      /*       <Switch>
        <Route path="/inventory"/>
      </Switch>; */
    } else {
      return null;
    }
  };
  render() {
    return (
      <button id="hFilterSubmit" onClick={this.handleSubmit}>
        Go!
      </button>
    );
  }
}
