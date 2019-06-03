import React, { Component } from "react";
import Footer from "./Footer.jsx";
import MasterForm from "./financeForm/MasterForm";

export default class Finance extends Component {
  render() {
    return (
      <div className="finance-page">
        <p>
          Fill this finance form to get financing of the car of your choice.
        </p>
        <MasterForm />
        <Footer />
      </div>
    );
  }
}
