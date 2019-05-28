import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import Inventory from "../../Inventory";
export default class SubmitButton extends Component {
  /* constructor(props) {
    super(props);
  } */
  state = {
    redirect: ""
  };
  handleSubmit = () => {
    if (this.props.make) {
      this.setState({ redirect: true });
    } else {
      return null;
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect push to={`/inventory?=${this.props.make}`} />;
    }
    /*     let route = (
      <Switch>
        <Link to={`/inventory`} />
        <Route path="/inventory" component={Inventory} />
      </Switch>
    ); */
    return (
      <button id="hFilterSubmit" onClick={this.handleSubmit}>
        Go!
      </button>
    );
  }
}
