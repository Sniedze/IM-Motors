import React, { Component } from "react";
import SubmitBtn from "./SubmitButton";
export default class HomeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "https://immotors-65ac.restdb.io/rest/cars",
      fetchSettings: {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "cache-control": "no-cache",
          "content-type": "application/json",
          "x-apikey": "5ce2d6b1780a473c8df5c9ef"
        }
      },
      data: [],
      models: "",
      years: ""
    };
  }
  componentDidMount() {
    //fetch cars for filtering on mount
    fetch(this.state.endpoint, this.state.fetchSettings).then(e =>
      e.json().then(result => this.setState({ data: result }))
    );
  }
 

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "Manufacturer") {
      this.setModels(event.target);
      this.setState({ years: "" }); // reset year selection if back to make
    } else if (event.target.name === "Model") {
      this.setYears(event.target);
    }
  };
  setModels = target => {
    let modelList = this.state.data.filter(obj => {
      return obj.Manufacturer === target.value;
    });
    const uniqueModelList = Array.from(new Set(modelList)); //weeds out possible repetition in model list
    this.setState({ models: uniqueModelList });
  };
  setYears = target => {
    let yearList = this.state.models.map(obj => {
      if (obj.Model === target.value) {
        return obj.Year;
      }
      return null; //arrow function must return something
    });
    const uniqueYearList = Array.from(new Set(yearList)); //weeds out possible repetition in year list
    this.setState({ years: uniqueYearList });
  };
  render() {
    //map out each fetched item's property, weed out repetition with Set(), turn it back into array
    const uniqueMakerList = Array.from(
      new Set(this.state.data.map(item => item.Manufacturer))
    );

    //map out make options for dropdown menu
    const makeOptions = uniqueMakerList.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
      <div className="filterContainer">
        <select
          name="Manufacturer"
          defaultValue={this.state.make}
          className="hFilterDropdown make"
          onChange={this.handleChange}
        >
          <option value={null} label="-Make-" />
          {makeOptions}
        </select>

        <select
          name="Model"
          defaultValue={this.state.models}
          onChange={this.handleChange}
        >
          <option value={null} label="-Model-" />
          {this.state.models && //only if state is set (models exist)
            this.state.models.map(item => (
              <option key={item.Model} value={item.Model}>
                {item.Model}
              </option>
            ))}
        </select>
        <select
          name="Year"
          defaultValue={this.state.year}
          onChange={this.handleChange}
        >
          <option value={null} label="-Year-" />
          {this.state.years && //only if state is set (years exist)
            this.state.years.map(
              item =>
                item && ( // only if item has value (is true), to fix the empty year due to; return null (see setYears())
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
            )}
        </select>
        <SubmitBtn
          make={this.state.Manufacturer}
          model={this.state.Model}
          year={this.state.Year}
        />
      </div>
    );
  }
}
