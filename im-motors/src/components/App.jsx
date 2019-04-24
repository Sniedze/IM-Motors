import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Inventory from "./Inventory.jsx";
import Finance from "./Finance.jsx";
import AboutUs from "./AboutUs.jsx";
import Car from "./Car.jsx";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/finance" component={Finance} />
          <Route path="/about" component={AboutUs} />
          <Route path="/car" component={Car} />
        </Switch>
      </HashRouter>
    );
  }
}
