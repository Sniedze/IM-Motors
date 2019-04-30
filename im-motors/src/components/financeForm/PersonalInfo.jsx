import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div>
          <label>Full Name</label>
          <input
            placeholder="Enter Full Name"
            onChange={this.props.handleChange("fullName")}
            defaultValue={this.props.fullName}
            name="fullName"
            noValidate
            required={true}
          />
        </div>
        <div>
          <label>SSN#</label>
          <input
            type="number"
            placeholder="123-45-6789"
            onChange={this.props.handleChange("ssn#")}
            defaultValue={this.props.ssn}
            name="ssn"
            noValidate
            required
          />
        </div>
        <div>
          <label>DoB</label>
          <DatePicker
            selected={this.props.dob}
            onChange={this.props.handleChangeDob}
            placeholder="Click to select a date"
            dateFormat="dd.MM.YYYY"
            name="dob"
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            onChange={this.props.handleChange("gender")}
            defaultValue={this.props.gender}
            name="gender"
            noValidate
          >
            <option value="">{this.props.genderPlaceholder}</option>
            {this.props.genderOptions.map(option => {
              return (
                <option key={option} value={option} label={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Phone</label>
          <input
            placeholder="Enter Phone Number"
            onChange={this.props.handleChange("phone")}
            defaultValue={this.props.phone}
            name="phone"
            noValidate
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={this.props.email}
            name="email"
            noValidate
            required
          />
        </div>
        <div>
          <label>D/L#</label>
          <input
            placeholder="Enter Number "
            onChange={this.props.handleChange("driversLicence")}
            defaultValue={this.props.driversLicence}
            name="driversLicence"
          />
        </div>
        <div>
          <label>Expiry Date</label>
          <DatePicker
            selected={this.props.expiryDate}
            onChange={this.props.handleChangeExpiry}
            placeholder="Click to select a date"
            dateFormat="dd.MM.YYYY"
            name="expiryDate"
          />
        </div>
        <label>D/L Country</label>
        <CountryDropdown
          value={this.props.country}
          onChange={this.props.handleChangeCountry}
          name="country"
        />
        <label>D/L Region</label>
        <RegionDropdown
          country={this.props.country}
          value={this.props.region}
          onChange={this.props.handleChangeRegion}
          name="region"
        />
      </div>
    );
  }
}
