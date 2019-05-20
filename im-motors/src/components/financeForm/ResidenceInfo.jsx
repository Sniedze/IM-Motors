import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class ResidenceInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    return (
      <div className="residence-info">
        <h2>Residence Information</h2>
        <div className="input-field street#">
          <label>Street No.</label>
          <span className="required">*</span>
          <input
            placeholder="Enter Street Number"
            onChange={this.props.handleChange}
            defaultValue={this.props.streetNumber}
            name="streetNumber"
            noValidate
            required
          />
          {this.props.errors.streetNumber.length > 0 && (
            <span className="errorMessage">
              {this.props.errors.streetNumber}
            </span>
          )}
        </div>
        <div className="input-field street-name">
          <label>Street Name</label>
          <span className="required">*</span>
          <input
            placeholder="Enter Street Name"
            onChange={this.props.handleChange}
            defaultValue={this.props.streetName}
            name="streetName"
            noValidate
            required
          />
          {this.props.errors.streetName.length > 0 && (
            <span className="errorMessage">{this.props.errors.streetName}</span>
          )}
        </div>

        <div className="input-field apartament">
          <label>Apartament No.</label>
          <input
            defaultValue={this.props.apartament}
            onChange={this.props.handleChange}
            placeholder="Enter Apartament Number"
            name="apartament"
          />
        </div>

        <div className=" input-field city">
          <label>City</label>
          <span className="required">*</span>
          <input
            placeholder="Enter the City"
            onChange={this.props.handleChange}
            defaultValue={this.props.city}
            name="city"
            noValidate
            required
          />
          {this.props.errors.city.length > 0 && (
            <span className="errorMessage">{this.props.errors.city}</span>
          )}
        </div>
        <div className=" input-field residence-region">
          <label> State/Region</label>
          <RegionDropdown
            country={this.props.residenceRegion}
            value={this.props.residenceRegion}
            onChange={this.props.handleChangeRegion}
            name="residenceRegion"
          />
          {this.props.errors.residenceRegion.length > 0 && (
            <span className="errorMessage">
              {this.props.errors.residenceRegion}
            </span>
          )}
        </div>
        <div className=" input-field residence-country">
          <label>Country</label>
          <CountryDropdown
            value={this.props.residenceCountry}
            onChange={this.props.handleChangeCountry}
            name="residenceCountry"
          />
          {this.props.errors.residenceCity.length > 0 && (
            <span className="errorMessage">
              {this.props.errors.residenceCity}
            </span>
          )}
        </div>
      </div>
    );
  }
}
