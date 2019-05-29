import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import ResidenceInfo from "./ResidenceInfo.jsx";
import EmploymentInfo from "./EmploymentInfo.jsx";

const validateForm = ({ errors, ...rest }) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    val => val.length > 0 && (valid = false)
  );
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

export default class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      ssn: null,
      dob: null,
      gender: "",
      phone: null,
      email: null,
      driversLicence: "",
      expiryDate: "",
      country: "",
      region: "",
      streetNumber: null,
      streetName: null,
      apartament: "",
      city: null,
      residenceRegion: undefined,
      residenceCountry: undefined,
      zip: null,
      years: null,
      months: null,
      type: "",
      payment: null,
      employmentChoice: "",
      explanation: "",
      additionalIncome: "",
      status: "",
      employer: null,
      employmentAddress: null,
      employmentCity: null,
      employmentCountry: undefined,
      employmentRegion: undefined,
      employmentZip: null,
      employmentYears: null,
      employmentMonths: null,
      workPhone: null,
      income: null,
      frequency: null,
      occupation: null,
      supervisor: "",

      errors: {
        fullName: "",
        ssn: "",
        dob: "",
        phone: "",
        email: "",
        gender: "",
        streetNumber: "",
        streetName: "",
        city: "",
        residenceRegion: "",
        residenceCountry: "",
        zip: "",
        years: "",
        months: "",
        payment: "",
        employmentAddress: "",
        employer: "",
        employmentCity: "",
        employmentCountry: "",
        employmentRegion: "",
        employmentZip: "",
        employmentYears: "",
        employmentMonths: "",
        workPhone: "",
        income: "",
        frequency: "",
        occupation: ""
      }
    };
  }

  selectCountry = val => {
    this.setState({
      country: val
    });
  };

  selectRegion = val => {
    this.setState({
      region: val
    });
  };
  selectResidenceCountry = val => {
    this.setState({
      residenceCountry: val
    });
  };
  selectResidenceRegion = val => {
    this.setState({
      residenceRegion: val
    });
  };
  selectEmploymentRegion = val => {
    this.setState({
      employmentRegion: val
    });
  };  

  selectEmploymentCountry = val => {
    this.setState({
      employmentCountry: val
    });
  };

  handleEmploymentInput = val => {
    this.setState({
      choice: val
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log("Name: ", name);
    console.log("Value: ", value);
    const validSsn = RegExp(/^\d{9}$/);
    const validPhone = RegExp(
      /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g
    );
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
    );

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be min 5 characters long!" : "";
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
      case "streetNumber":
        errors.streetNumber =
          value.length < 1 ? "Please enter the street number" : "";
        break;
      case "streetName":
        errors.streetName =
          value.length < 3 ? "Street Name must be min 3 characters long!" : "";
        break;
      case "city":
        errors.city =
          value.length < 3 ? "City name must be min 3 characters long!" : "";
        break;
      case "residenceRegion":
        errors.residenceRegion =
          value.length < 3 ? "State/Region must be min 3 characters long!" : "";
        break;
      case "residenceCountry":
        errors.residenceCountry =
          value.length < 3 ? "Country must be min 3 characters long!" : "";
        break;
      case "zip":
        errors.zip = value.length < 1 ? "Enter valdi ZIP code" : "";
        break;
      case "years":
        errors.years = value.length < 1 ? "Enter time of residence" : "";
        break;
      case "months":
        errors.months = value.length < 1 ? "Enter time of residence" : "";
        break;
      case "payment":
        errors.payment =
          value.length < 1 ? "Enter monthly residence payment" : "";
        break;
      case "employer":
        errors.employer =
          value.length < 3
            ? "Employer name must be min 3 characters long!"
            : "";
        break;

      case "workPhone":
        errors.workPhone = validPhone.test(value)
          ? ""
          : "Enter valid phone number";
        break;

      case "employmentCity":
        errors.employmentCity =
          value.length < 3 ? "City name must be min 3 characters long!" : "";
        break;
      case "employmentRegion":
        errors.employmentRegion =
          value.length < 3 ? "State/Region must be min 3 characters long!" : "";
        break;
      case "employmentCountry":
        errors.employmentCountry =
          value.length < 3 ? "Country must be min 3 characters long!" : "";
        break;
      case "employmentZip":
        errors.employmentZip = value.length < 1 ? "Enter valdi ZIP code" : "";
        break;
      case "employmentYears":
        errors.employmentYears =
          value.length < 1 ? "Enter time of employment" : "";
        break;
      case "employmentMonths":
        errors.employmentMonths =
          value.length < 1 ? "Enter time of employment" : "";
        break;
      case "income":
        errors.income = value.length < 1 ? "Enter your income" : "";
        break;
      case "frequency":
        errors.frequency =
          value.length < 1 ? "Enter your income frequency" : "";
        break;
      case "occupation":
        errors.occupation = value.length < 1 ? "Enter your occupation" : "";
        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = event => {
    event.preventDefault();

    if (validateForm(this.state)) {
      console.log("Valid Form");
      console.log(`
        --SUBMITTING--
        Full Name: ${this.state.fullName}
        Phone: ${this.state.phone}
        Email: ${this.state.email}
        SSN: ${this.state.ssn}
      `);
      const data = this.state;

      console.log(this.state);
      fetch("https://5cc0aaa482ec6a00149f3e37.mockapi.io/applications", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        });
      });
    } else {
      console.error("Invalid Form");
      alert("All required fields must be filled!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>Application for Credit</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <PersonalInfo
            handleChangeCountry={this.selectCountry}
            handleChangeRegion={this.selectRegion}
            handleChangeDob={this.handleChangeDob}
            handleChangeExpiry={this.handleChangeExpiry}
            handleChange={this.handleChange}
            fulltName={this.state.fullName}
            ssn={this.state.ssn}
            gender={this.state.gender}
            genderOptions={this.state.genderOptions}
            phone={this.state.phone}
            email={this.state.email}
            driversLicence={this.state.driversLicence}
            expiryDate={this.state.expiryDate}
            dob={this.state.dob}
            country={this.state.country}
            region={this.state.region}
            errors={this.state.errors}
          />
          <ResidenceInfo
            streetNumber={this.state.streetNumber}
            streetName={this.state.streetName}
            apartament={this.state.apartament}
            city={this.state.city}
            residenceRegion={this.state.residenceRegion}
            residenceCountry={this.state.residenceCountry}
            zip={this.state.zip}
            years={this.state.years}
            months={this.state.years}
            type={this.state.type}
            payment={this.state.payment}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleChangeCountry={this.selectResidenceCountry}
            handleChangeRegion={this.selectResidenceRegion}
          />
          <EmploymentInfo
            employmentChoice={this.state.employmentChoice}
            explanation={this.state.explanation}
            additionalIncome={this.state.additionalIncome}
            selfEmployed={this.state.selfEmployed}
            status={this.state.status}
            employer={this.state.employer}
            employmentAddress={this.state.employmentAddress}
            employmentCity={this.state.employmentCity}
            employmentCountry={this.state.employmentCountry}
            employmentRegion={this.state.employmentRegion}
            employmentZip={this.state.employmentZip}
            employmentYears={this.state.employmentYears}
            employmentMonths={this.state.employmentMonths}
            workPhone={this.state.workPhone}
            income={this.state.income}
            frequency={this.state.frequency}
            occupation={this.state.occupation}
            supervisor={this.state.supervisor}
            handleChangeCountry={this.selectEmploymentCountry}
            handleChangeRegion={this.selectEmploymentRegion}
            errors={this.state.errors}
          />

          <input className=" submit-btn " type="submit" value="Submit" ></input>
        </form>
      </React.Fragment>
    );
  }
}

