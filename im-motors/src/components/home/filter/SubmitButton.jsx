import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import Inventory from "../../Inventory";
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
      //let searchQueries = this.props.filter(prop => {});
      if (this.props.make) {
        return (
          <Redirect
            push
            to={{
              pathname: "/inventory",
              search: `?=${this.props.make}`,
              state: {
                make: this.props.make,
                model: this.props.model,
                year: this.props.year
              }
            }}
          />
        );
      }

      //return <Redirect push to={`/inventory?=${this.props.make}`} />;
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
