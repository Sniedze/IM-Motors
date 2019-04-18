import React, { Component } from "react";
import CountrySelection from "./CountrySelection";
import DateSelector from "./DateSelector.jsx";

export default class DriversLicenceInfo extends Component {
  render() {
    return (
      <form className="drivers-licence-info">
        <div>
          <label>D/L#</label>
          <input
            placeholder="Enter Number "
            onChange={this.props.handleChange("driverLicence")}
            defaultValue={this.props.driversLicence}
          />
        </div>
        <div>
          <label>D/L Expiry Date</label>
          <DateSelector placeholder="Enter Expiry Date " />
        </div>
        <CountrySelection />
      </form>
    );
  }
}
