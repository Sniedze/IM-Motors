import React, { Component } from 'react';
import Home from './Home.jsx'
import Inventory from './Inventory.jsx'
import Finance from './Finance.jsx'
import AboutUs from './AboutUs.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Inventory />
        <Finance />
        <AboutUs />
      </div>
    );
  };
}
export default App;