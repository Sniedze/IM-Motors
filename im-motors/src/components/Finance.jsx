import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MasterForm from "./financeForm/MasterForm";

export default class Finance extends Component {
  render() {
    return (
      <div>
        <Header />
        <MasterForm />
        <Footer />
      </div>
    );
  }
}
