import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class EmploymentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employed: false
    };
  }

 

  render() {
    // const { errors } = this.props.state;
    return (
      <div className="employment-info">
        <h2>Employment Information</h2>
        <div className=" input-field employment-choice">
          <label>Are you employed?</label>
          <select
            onChange={this.props.handleChange}
            defaultValue={this.props.employmentChoice}
            name="choice"
            noValidate
            onInput={this.HandleEmploymentInput}
          >
            <option value="" label="--" />
            <option key="yes" value="Yes" label="Yes" />
            <option key="no" value="No" label="No" />
          </select>
        </div>
        <div className=" input-field explanation">
          <label>Explain income (eg Retired or Alimony)</label>

          <input
            onChange={this.props.handleChange}
            defaultValue={this.props.explanation}
            name="explanation"
            type="text"
            noValidate
            required
          />
        </div>
        <div className="employed">
          <div className=" input-field employment-status">
            <label>Employment status</label>
            <select
              onChange={this.props.handleChange}
              defaultValue={this.props.employmentStatus}
              name="status"
              noValidate
            >
              <option value="" label="--" />
              <option key="full" value="Full time" label="Full time" />
              <option key="part" value="Part time" label="Part time" />
              <option key="military" value="Military" label="Military" />
              <option key="contract" value="Contract" label="Contract" />
              <option key="seasonal" value="Seasonal" label="Seasonal" />
              <option key="temporary" value="Temporary" label="Temporary" />
              <option
                key="selfemployed"
                value="Self-employed"
                label="Self-employed"
              />
            </select>
          </div>
          <div className="input-field employer">
            <label>Employer</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.employer}
              name="employer"
              noValidate
              required
            />
            {this.props.errors.employer.length > 0 && (
              <span className="errorMessage">{this.props.errors.employer}</span>
            )}
          </div>
          <div className="input-field address">
            <label>Address</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.employmentAddress}
              name="address"
              noValidate
              required
            />
            {this.props.errors.employmentAddress.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentAddress}
              </span>
            )}
          </div>

          <div className=" input-field employment-city">
            <label>City</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.employmentCity}
              name="employmentCity"
              noValidate
              required
            />
            {this.props.errors.employmentCity.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentCity}
              </span>
            )}
          </div>

          <div className=" input-field employment-country">
            <label>Country</label>
            <span className="required">*</span>
            <CountryDropdown
              value={this.props.employmentCountry}
              onChange={this.props.handleChangeEmploymentCountry}
              name="employmentCountry"
            />
            {this.props.errors.employmentCountry.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentCountry}
              </span>
            )}
          </div>
          <div className=" input-field employment-region">
            <label> State/Region</label>
            <span className="required">*</span>
            <RegionDropdown
              country={this.props.employmentCountry}
              value={this.props.employmentRegion}
              onChange={this.props.handleChangeEmploymentRegion}
              name="employmentRegion"
            />
            {this.props.errors.employmentRegion.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentRegion}
              </span>
            )}
          </div>
          <div className=" input-field employment-zip">
            <label>Zip</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.employmentZip}
              name="employmentZip"
              noValidate
              required
            />
            {this.props.errors.employmentZip.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentZip}
              </span>
            )}
          </div>
          <div className=" input-field employment-time">
            <label>Time at job</label>
            <span className="required">*</span>
            <select
              onChange={this.props.handleChange}
              defaultValue={this.props.employmentYears}
              name="employmentYears"
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
              <option key="10" value="1" label="1" />
              <option key="11" value="2" label="2" />
              <option key="12" value="3" label="3" />
              <option key="13" value="1" label="1" />
              <option key="14" value="2" label="2" />
              <option key="15" value="3" label="3" />
              <option key="16" value="16" label="16" />
              <option key="17" value="17" label="17" />
              <option key="18" value="18" label="18" />
              <option key="19" value="19" label="19" />
              <option key="20" value="20+" label="20+" />
            </select>
            {this.props.errors.employmentYears.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentYears}
              </span>
            )}
            <select
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
            {this.props.errors.employmentMonths.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.employmentMonths}
              </span>
            )}
          </div>
          <div className=" input-field work-phone">
            <label>Work phone</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.workPhone}
              name="workPhone"
              noValidate
              required
            />
            {this.props.errors.workPhone.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.workPhone}
              </span>
            )}
          </div>
          <div className=" input-field income">
            <label>Income $ (Gross, before taxes)</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.income}
              name="income"
              noValidate
              required
            />
            {this.props.errors.income.length > 0 && (
              <span className="errorMessage">{this.props.errors.income}</span>
            )}
          </div>

          <div className=" input-field frequency">
            <label>Frequency of income</label>
            <span className="required">*</span>
            <select
              onChange={this.props.handleChange}
              defaultValue={this.props.frequency}
              name="frequency"
              noValidate
            >
              <option value="" label="--" />
              <option key="biweekly" value="Bi-weekly" label="Bi-weekly" />
              <option key="monthly" value="monthly" label="monthly" />
              <option key="weekly" value="weekly" label="weekly" />
              <option key="yearly" value="yearly" label="yearly" />
            </select>
            {this.props.errors.frequency.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.frequency}
              </span>
            )}
          </div>
          <div className=" input-field occuption">
            <label>Occupation</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.occupation}
              name="occupation"
              noValidate
              required
            />
            {this.props.errors.occupation.length > 0 && (
              <span className="errorMessage">
                {this.props.errors.occupation}
              </span>
            )}
          </div>
          <div className=" input-field supervisor">
            <label>Name of supervisor</label>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.supervisor}
              name="supervisor"
              noValidate
              required
            />
          </div>
        </div>
        <div className=" input-field additional-income">
          <label>Input additional gross monthly income $</label>
          <select
            onChange={this.props.handleChange}
            defaultValue={this.props.additionalIncome}
            name="additionalIncome"
            noValidate
          >
            <option value="" label="--" />
            <option key="yes" value="Yes" label="Yes" />
            <option key="no" value="No" label="No" />
          </select>
        </div>
      </div>
    );
  }
}
