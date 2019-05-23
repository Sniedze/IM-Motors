import React, { Component } from "react";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <Logo />
          <Menu />
        </header>
      </div>
    );
  }
}
