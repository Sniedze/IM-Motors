import React, { Component } from 'react';
import Logo from './Logo.jsx'
import Menu from './Menu.jsx'

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Menu />
      </div>
    );
  };
}
export default Header;