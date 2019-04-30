import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class CountrySelection extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
    console.log(val);
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={val => this.selectCountry(val)}
          name="country"
        />
        <RegionDropdown
          country={country}
          value={region}
          onChange={val => this.selectRegion(val)}
          name="region"
        />
      </div>
    );
  }
}
