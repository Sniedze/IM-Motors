import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import DriversLicence from "./DriversLicence.jsx";
// import ResidenceInfo from "./ResidenceInfo.jsx";

export default class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
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
      genderOptions: ["Male", "Female", "Non-binary"],
      errors: {
        fullName: "",
        ssn: "",
        dob: "",
        phone: "",
        email: "",
        gender: ""
      }
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = name => event => {
    event.preventDefault();
    const { name, value } = event.target;
    const validSsn = RegExp(/^\d{9}$/);
    const validPhone = RegExp(
      /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g
    );
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
    );
    let errors = this.state.errors;
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "ssn":
        errors.ssn = validSsn.test(value) ? "" : "Enter valid SSN";
        break;
      case "phone":
        errors.phone = validPhone.test(value) ? "" : "Enter valid phone number";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
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

        <form onSubmit={this.handleSubmit} noValidate>
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
