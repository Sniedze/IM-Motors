import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class ResidenceInfo extends Component {
  render() {
    // const { errors } = this.props.state;
    return (
      <div className="residence-info">
        <h3>Residence Information</h3>
        <div className="form-fields">
          <div className="input-field street#">
            <label>Street No.</label>
            <span className="required">*</span>
            <input
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
              onChange={this.props.handleChange}
              defaultValue={this.props.streetName}
              name="streetName"
              noValidate
              required
            />
            {this.props.errors.streetName.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.streetName}
              </span>
            )}
          </div>

          <div className="input-field apartament">
            <label>Apartament No.</label>
            <input
              defaultValue={this.props.apartament}
              onChange={this.props.handleChange}
              name="apartament"
            />
          </div>

          <div className=" input-field city">
            <label>City</label>
            <span className="required">*</span>
            <input
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

          <div className=" input-field residence-country">
            <label>Country</label>
            <span className="required">*</span>
            <CountryDropdown
              value={this.props.residenceCountry}
              onChange={this.props.handleChangeCountry}
              name="residenceCountry"
            />
            {this.props.errors.residenceCountry.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.residenceCountry}
              </span>
            )}
          </div>
          <div className=" input-field residence-region">
            <label> State/Region</label>
            <span className="required">*</span>
            <RegionDropdown
              country={this.props.residenceCountry}
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
          <div className=" input-field zip">
            <label>Zip</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.zip}
              name="zip"
              noValidate
              required
            />
            {this.props.errors.zip.length > 0 && (
              <span className="errorMessage">{this.props.errors.zip}</span>
            )}
          </div>
          <div className=" input-field time">
            <label>Time at Res.</label>
            <span className="required">*</span>
            <select
              className="residence-years"
              onChange={this.props.handleChange}
              defaultValue={this.props.years}
              name="years"
              noValidate
            >
              <option value="" label="-Years-" />
              <option key="1" value="1" label="1" />
              <option key="2" value="2" label="2" />
              <option key="3" value="3" label="3" />
              <option key="4" value="4" label="4" />
              <option key="5" value="5" label="5" />
              <option key="6" value="6" label="6" />
              <option key="7" value="7" label="7" />
              <option key="8" value="8" label="8" />
              <option key="9" value="9" label="9" />
              <option key="10" value="10" label="10" />
              <option key="11" value="11" label="11" />
              <option key="12" value="12" label="12" />
              <option key="13" value="13" label="13" />
              <option key="14" value="14" label="14" />
              <option key="15" value="15" label="15" />
              <option key="16" value="16" label="16" />
              <option key="17" value="17" label="17" />
              <option key="18" value="18" label="18" />
              <option key="19" value="19" label="19" />
              <option key="20" value="20+" label="20+" />
            </select>
            {this.props.errors.city.length > 0 && (
              <span className="errorMessage">{this.props.errors.years}</span>
            )}
            <select
              className="residence-months"
              onChange={this.props.handleChange}
              defaultValue={this.props.months}
              name="months"
              noValidate
            >
              <option value="" label="-Months-" />
              <option key="one" value="1" label="1" />
              <option key="two" value="2" label="2" />
              <option key="three" value="3" label="3" />
              <option key="four" value="4" label="4" />
              <option key="five" value="5" label="5" />
              <option key="six" value="6" label="6" />
              <option key="seven" value="7" label="7" />
              <option key="eight" value="8" label="8" />
              <option key="nine" value="9" label="9" />
              <option key="ten" value="10" label="10" />
              <option key="eleven" value="11" label="11" />
            </select>
            {this.props.errors.months.length > 0 && (
              <span className="errorMessage">{this.props.errors.months}</span>
            )}
          </div>
          <div className=" input-field residence-type">
            <label>Residence Type</label>
            <select
              onChange={this.props.handleChange}
              defaultValue={this.props.type}
              name="type"
              noValidate
            >
              <option value="" label="--" />
              <option key="family" value="With family" label="With family" />
              <option key="military" value="Military" label="Military" />
              <option
                key="mortgage"
                value="Own-mortgage"
                label="Own-mortgage"
              />
              <option
                key="outright"
                value="Own-outright"
                label="Own-outright"
              />
              <option key="rent" value="Rent" label="Rent" />
              <option key="other" value="Other" label="Other" />
            </select>
          </div>
          <div className=" input-field payment">
            <label>Monthly payment $</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.payment}
              name="payment"
              noValidate
              required
            />
            {this.props.errors.payment.length > 0 && (
              <span className="errorMessage">{this.props.errors.payment}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
