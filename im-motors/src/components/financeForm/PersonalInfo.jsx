import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class PersonalInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    return (
      <div className="personal-info">
        <h3>Personal Information</h3>
        <div className="form-fields">
        <div className="input-field name">
          <label>Full Name</label>
          <span className="required">*</span>
          <input
            
            onChange={this.props.handleChange}
            defaultValue={this.props.fullName}
            name="fullName"
            noValidate
            required
          />
          {this.props.errors.fullName.length > 0 && (
            <span className="errorMessage">{this.props.errors.fullName}</span>
          )}
        </div>
        <div className="input-field ssn">
          <label>SSN</label>
          <span className="required">*</span>
          <input
            type="number"
            
            onChange={this.props.handleChange}
            defaultValue={this.props.ssn}
            name="ssn"
            noValidate
            required
          />
          {this.props.errors.ssn.length > 0 && (
            <span className="errorMessage">{this.props.errors.ssn}</span>
          )}
        </div>

        <div className="input-field dob">
          <label>Date of Birth</label>
          <span className="required">*</span>
          <input
            defaultValue={this.props.dob}
            onChange={this.props.handleChange}
            placeholder="ddyyyy"
            type="date"
            name="dob"
            required
          />
        </div>

        <div className=" input-field gender">
          <label>Gender</label>
          <select
            onChange={this.props.handleChange}
            defaultValue={this.props.gender}
            name="gender"
            noValidate
          >
            <option value="" label="--" />
            <option key="male" value="Male" label="Male" />
            <option key="female" value="Female" label="Female" />
            <option key="other" value="Other" label="Other" />
          </select>
        </div>

        <div className=" input-field phone">
          <label>Phone</label>
          <span className="required">*</span>
          <input
            
            onChange={this.props.handleChange}
            defaultValue={this.props.phone}
            name="phone"
            noValidate
            required
          />
          {this.props.errors.phone.length > 0 && (
            <span className="errorMessage">{this.props.errors.phone}</span>
          )}
        </div>
        <div className=" input-field email">
          <label>Email Address</label>
          <span className="required">*</span>
          <input
            className={this.props.errors.email.length > 0 ? "error" : null}
           
            onChange={this.props.handleChange}
            defaultValue={this.props.email}
            type="email"
            name="email"
            noValidate
            required
          />
          {this.props.errors.email.length > 0 && (
            <span className="errorMessage">{this.props.errors.email}</span>
          )}
        </div>
        <div className=" input-field licence-number">
          <label>Driver`s Licence Number</label>
          <input
            
            onChange={this.props.handleChange}
            defaultValue={this.props.driversLicence}
            name="driversLicence"
          />
        </div>
        <div className=" input-field licence-expiry">
          <label>D/L Expiry Date</label>
          <input
            defaultValue={this.props.expiryDate}
            onChange={this.props.handleChange}
            type="date"
            name="expiryDate"
          />
        </div>
        <div className=" input-field licence-country">
          <label>D/L Country</label>
          <CountryDropdown
            value={this.props.country}
            onChange={this.props.handleChangeCountry}
            name="country"
          />
        </div>
        <div className=" input-field licence-region">
          <label>D/L Region</label>
          <RegionDropdown
            country={this.props.country}
            value={this.props.region}
            onChange={this.props.handleChangeRegion}
            name="region"
          />
        </div>
      </div>
      </div>
    );
  }
}

