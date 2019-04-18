import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import DriversLicence from "./DriversLicence.jsx";
// import ResidenceInfo from "./ResidenceInfo.jsx";

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
      startDate: new Date(),
      gender: "",
      phone: "",
      email: "",
      driversLicence: "",
      expiryDate: "",
      country: "",
      region: "",
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
            dob={this.state.startDate}
            gender={this.state.gender}
            genderPlaceholder="Select Gender"
            genderOptions={this.state.genderOptions}
            phone={this.state.phone}
            email={this.state.email}
          />
          <DriversLicence
            driversLicence={this.state.driversLicence}
            expiryDate={this.state.expiryDate}
            handleChange={this.handleChange}
          />
          {/* <ResidenceInfo /> */}
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
