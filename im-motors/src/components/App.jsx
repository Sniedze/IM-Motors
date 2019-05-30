import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./home/Home.jsx";
import Inventory from "./Inventory.jsx";
import Finance from "./Finance.jsx";
import AboutUs from "./AboutUs.jsx";
import Blog from "./blog/Blog.jsx";
import MembershipForm from "./home/membershipForm";
import SideDrawer from "./BurgerMenu/slideDrawer";
import BackDrop from "./BurgerMenu/backDrop";
import Header from "./Header.jsx";
import TeenagerOffersPage from "./home/Special-offers.jsx";

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  toggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  closeHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop handleBackdrop={this.closeHandler} />;
    }
    return (
      <HashRouter>
        <Header handleSlide={this.toggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          close={this.closeHandler}
        />
        {backdrop}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/finance" component={Finance} />
          <Route path="/about" component={AboutUs} /> /}
          <Route path="/blog" component={Blog} />
          <Route path="/membership" component={MembershipForm} />
          <Route path="/teenagers-offers" component={TeenagerOffersPage} />
        </Switch>
      </HashRouter>
    );
  }
}
