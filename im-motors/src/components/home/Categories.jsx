import React, { Component } from "react";
import FamilyCarIcon from "../../assets/family-car-icon.png";
import SUVCarIcon from "../../assets/suv-car-icon.png";
import PickUpCarIcon from "../../assets/pickup-car-icon.png";
import SmallCarIcon from "../../assets/small-car-icon.png";
import { Redirect } from "react-router-dom";
export default class Categories extends Component {
  state = { redirect: "" };
  handleCLick = event => {
    this.setState({ redirect: true });
    this.setState({ target: event.currentTarget });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: "/inventory",
            search: `?type=${this.state.target.id}`
          }}
        />
      );
    }
    return (
      <div className="catContainer">
        <h2>Vehicles by Category</h2>
        <div className="category-buttons">
        <div id="Family" onClick={this.handleCLick}>
          <img src={FamilyCarIcon} alt="Family Car" />
          <h3>Family Cars</h3>
        </div>
        <div id="SUV" onClick={this.handleCLick}>
          <img src={SUVCarIcon} alt="SUV" />
          <h3>SUVs</h3>
        </div>
        <div id="Pickup" onClick={this.handleCLick}>
          <img src={PickUpCarIcon} alt="Pick-up" />
          <h3>Pick-Ups</h3>
        </div>
        <div id="Under5000" onClick={this.handleCLick}>
          <img src={SmallCarIcon} alt="Small car" />
          <h3>Under $5000</h3>
        </div>
      </div>
      </div>
    );
  }
}
