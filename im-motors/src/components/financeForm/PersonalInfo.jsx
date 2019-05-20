import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class PersonalInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    return (
      <div className="personal-info">
      <h2>Personal Information</h2>
        <div className="input-field name">
          <label>Full Name</label>
          <span className="required">*</span>
          <input
            placeholder="Enter Full Name"
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
          <label>Social Security Number</label>
          <span className="required">*</span>
          <input
            type="number"
            placeholder="Enter Social Security Number"
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
            placeholder="Click to select a date"
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
            <option value="" label={this.props.genderPlaceholder} />
            <option key="male" value="Male" label="Male" />
            <option key="female" value="Female" label="Female" />
            <option key="other" value="Other" label="Other" />
          </select>
        </div>

        <div className=" input-field phone">
          <label>Phone</label>
          <span className="required">*</span>
          <input
            placeholder="Enter Phone Number"
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
            placeholder="Email Address"
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
            placeholder="Enter Number "
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
            placeholder="Click to select a date"
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
    );
  }
}

// import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// export default class PersonalInfo extends Component {
//   render() {
//     return (
//       <div className="personal-info">
//         <div className="input-field">
//           <label>Full Name</label>
//           <input
//             label="Full Name"
//             placeholder="Enter Full Name"
//             onChange={this.props.handleChange("fullName")}
//             defaultValue={this.props.fullName}
//             icon="user"
//             name="fullName"
//             noValidate
//             required={true}
//             group
//           />
//         </div>
//         <div className="input-field">
//           <input
//             label="Social Security Number"
//             type="number"
//             placeholder="Enter Social Security Number"
//             onChange={this.props.handleChange("ssn#")}
//             defaultValue={this.props.ssn}
//             name="ssn"
//             noValidate
//             required={true}
//             group
//           />
//         </div>
//         <div className="input-field">
//           <label>Date of Birth</label>
//           <DatePicker
//             selected={this.props.dob}
//             onChange={this.props.handleChangeDob}
//             placeholder="Click to select a date"
//             dateFormat="dd.MM.YYYY"
//             parseDate={this.parseDate}
//             name="dob"
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <label>Gender</label>
//           <select
//             onChange={this.props.handleChange("gender")}
//             defaultValue={this.props.gender}
//             name="gender"
//             noValidate
//             group
//           >
//             <option value="" label={this.props.genderPlaceholder} />
//             {this.props.genderOptions.map(option => {
//               return (
//                 <option key={option} value={option} label={option}>
//                   {option}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className=" input-field">
//           <input
//             label="Phone"
//             placeholder="Enter Phone Number"
//             onChange={this.props.handleChange("phone")}
//             defaultValue={this.props.phone}
//             name="phone"
//             noValidate
//             required
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <input
//             label="Email Address"
//             placeholder="Email Address"
//             onChange={this.props.handleChange("email")}
//             defaultValue={this.props.email}
//             name="email"
//             noValidate
//             required
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <input
//             label="Driver`s Licence Number"
//             placeholder="Enter Number "
//             onChange={this.props.handleChange("driversLicence")}
//             defaultValue={this.props.driversLicence}
//             name="driversLicence"
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <label>D/L Expiry Date</label>
//           <DatePicker
//             selected={this.props.expiryDate}
//             onChange={this.props.handleChangeExpiry}
//             placeholder="Click to select a date"
//             dateFormat="dd.MM.YYYY"
//             name="expiryDate"
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <label>D/L Country</label>
//           <CountryDropdown
//             value={this.props.country}
//             onChange={this.props.handleChangeCountry}
//             name="country"
//             group
//           />
//         </div>
//         <div className=" input-field">
//           <label>D/L Region</label>
//           <RegionDropdown
//             country={this.props.country}
//             value={this.props.region}
//             onChange={this.props.handleChangeRegion}
//             name="region"
//             group
//           />
//         </div>
//       </div>
//     );
//   }
// }
