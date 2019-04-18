import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import ResidenceInfo from "./ResidenceInfo.jsx";

export default class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: "",
      middleName: "",
      lastName: "",
      ssn: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      driverLicence: "",
      expiryDate: "",
      country: "",
      state: "",
      genderOptions: ["Male", "Female", "Non-binary"]
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    alert("Your application is submitted!");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Application for Credit</h1>
        <h3>Step{this.state.currentStep}</h3>
        <form onSubmit={this.handleSubmit}>
          <PersonalInfo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            firstName={this.state.firstName}
            middleName={this.state.middleName}
            lastName={this.state.lastName}
            ssn={this.state.ssn}
            dob={this.state.dob}
            gender={this.state.gender}
            genderOptions={this.state.genderOptions}
            placeholder={"Select Gender"}
            phone={this.state.phone}
            email={this.state.email}
          />
          {/* <ResidenceInfo /> */}
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
