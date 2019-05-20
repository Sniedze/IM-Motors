import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo.jsx";

import ResidenceInfo from "./ResidenceInfo.jsx";

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
      residenceRegion: null,
      residenceCountry: null,
      zip: null,
      years: null,
      months: null,
      payment: null,

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
        payment: ""
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
      country: val
    });
  };

  selectResidenceRegion = val => {
    this.setState({
      region: val
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
          value.length < 2 ? "Enter monthly residence payment" : "";
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
      //delete options.headers["Content-Type"];
      // fetch("https://5cc0aaa482ec6a00149f3e37.mockapi.io/applications", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   }
      // });
    } else {
      console.error("Invalid Form");
      alert("All required fields must be filled!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Application for Credit</h1>
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
            genderPlaceholder="Select Gender"
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
            payment={this.state.payment}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleChangeCountry={this.selectResidenceCountry}
            handleChangeRegion={this.selectResidenceRegion}
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

// import React, { Component } from "react";
// import PersonalInfo from "./PersonalInfo.jsx";

// // import ResidenceInfo from "./ResidenceInfo.jsx";

// export default class MasterForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: "",
//       ssn: "",
//       dob: new Date(),
//       gender: "",
//       phone: "",
//       email: "",
//       driversLicence: "",
//       expiryDate: new Date(),
//       country: "",
//       region: "",
//       genderOptions: ["Male", "Female", "Non-binary"],
//       errors: {
//         fullName: "",
//         ssn: "",
//         dob: "",
//         phone: "",
//         email: "",
//         gender: ""
//       }
//     };
//   }

//   selectCountry = val => {
//     this.setState({
//       country: val
//     });
//   };

//   selectRegion = val => {
//     this.setState({
//       region: val
//     });
//   };
//   parseDate(input) {
//     const [month, day, year] = input.split("/");
//     return `${year}-${month}-${day}`;
//   }

//   handleChangeDob = date => {
//     this.setState({
//       dob: date
//     });
//   };

//   handleChangeExpiry = date => {
//     this.setState({
//       expiryDate: date
//     });
//   };

//   handleChange = name => event => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     const validSsn = RegExp(/^\d{9}$/);
//     const validPhone = RegExp(
//       /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g
//     );
//     const validEmailRegex = RegExp(
//       /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
//     );
//     let errors = this.state.errors;
//     switch (name) {
//       case "fullName":
//         errors.fullName =
//           value.length < 5 ? "Full Name must be 5 characters long!" : "";
//         break;
//       case "ssn":
//         errors.ssn = validSsn.test(value) ? "" : "Enter valid SSN";
//         break;
//       case "phone":
//         errors.phone = validPhone.test(value) ? "" : "Enter valid phone number";
//         break;
//       case "email":
//         errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
//         break;

//       default:
//         break;
//     }

//     this.setState({ errors, [name]: value }, () => {
//       console.log(errors);
//     });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     const validateForm = errors => {
//       let valid = true;
//       Object.values(errors).map(
//         // if we have an error string set valid to false
//         val => val.length > 0 && (valid = false)
//       );
//       return valid;
//     };
//     if (validateForm(this.state.errors)) {
//       console.info("Valid Form");
//       const data = new FormData(event.target);

//       console.log(this.state);
//       fetch("https://5cc0aaa482ec6a00149f3e37.mockapi.io/applications", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         }
//       }).then(response => {
//         response.json().then(data => {
//           console.log("Successful" + data);
//         });
//       });
//       //delete options.headers["Content-Type"];
//       // fetch("https://5cc0aaa482ec6a00149f3e37.mockapi.io/applications", {
//       //   method: "POST",
//       //   body: JSON.stringify(data),
//       //   headers: {
//       //     Accept: "application/json",
//       //     "Content-Type": "application/json"
//       //   }
//       // });
//       console.log(this.state);
//     } else {
//       console.error("Invalid Form");
//     }
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Application for Credit</h1>
//         <form onSubmit={this.handleSubmit} noValidate>
//           <PersonalInfo
//             handleChangeCountry={this.selectCountry}
//             handleChangeRegion={this.selectRegion}
//             handleChangeDob={this.handleChangeDob}
//             handleChangeExpiry={this.handleChangeExpiry}
//             handleChange={this.handleChange}
//             parseDate={this.parseDate}
//             firstName={this.state.firstName}
//             middleName={this.state.middleName}
//             lastName={this.state.lastName}
//             ssn={this.state.ssn}
//             gender={this.state.gender}
//             genderPlaceholder="Select Gender"
//             genderOptions={this.state.genderOptions}
//             phone={this.state.phone}
//             email={this.state.email}
//             driversLicence={this.state.driversLicence}
//             expiryDate={this.state.expiryDate}
//             dob={this.state.dob}
//             country={this.state.country}
//             region={this.state.region}
//           />
//           {/* <ResidenceInfo /> */}
//           <input type="submit" value="Submit" />
//         </form>
//       </React.Fragment>
//     );
//   }
// }
