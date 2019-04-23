import React, { Component } from "react";
import DateSelector from "./DateSelector.jsx";

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
          />
        </div>
        <div>
          <label>DoB</label>
          <DateSelector />
        </div>
        <div>
          <label>Gender</label>
          <select
            onChange={this.props.handleChange("gender")}
            defaultValue={this.props.gender}
            name="gender"
          >
            <option value="" disabled>
              {this.props.genderPlaceholder}
            </option>
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
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={this.props.email}
            name="email"
          />
        </div>
      </div>
    );
  }
}
