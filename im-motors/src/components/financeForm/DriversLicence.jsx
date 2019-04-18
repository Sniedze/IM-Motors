import React, { Component } from "react";

export default class DriversLicenceInfo extends Component {
  render() {
    return (
      <form className="drivers-licence-info">
        <div>
          <label>D/L#</label>
          <input
            placeholder="Enter Number "
            onChange={this.props.handleChange("driverLicence")}
            defaultValue={this.props.driverLicence}
          />
        </div>
        <div>
          <label>D/L Expiry Date</label>
          <input
            placeholder="Enter Expiry Date "
            onChange={this.props.handleChange("expiryDate")}
            defaultValue={this.props.expiryDate}
          />
        </div>
        <div>
          <label>Country</label>
          <select
            placeholder="Select Country "
            onChange={this.props.handleChange("country")}
            defaultValue={this.props.country}
          />
        </div>
        <div>
          <label>State</label>
          <select
            placeholder="Select State "
            onChange={this.props.handleChange("state")}
            defaultValue={this.props.state}
          />
        </div>
      </form>
    );
  }
}
