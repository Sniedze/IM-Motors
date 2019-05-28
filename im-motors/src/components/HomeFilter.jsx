import React, { Component } from "react";

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
    fetch(this.state.endpoint, this.state.fetchSettings).then(e =>
      e.json().then(result => this.setState({ data: result }))
    );
  }
 

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "Manufacturer") {
      this.setModels(event.target);
    } else if (event.target.name === "Model") {
      this.setYears(event.target);
    }
  };
  setModels = target => {
    let modelList = this.state.data.filter(obj => {
      return obj.Manufacturer === target.value;
    });
    this.setState({ models: modelList });
  };
  setYears = target => {
    let carYears = this.state.models.map(obj => {
      if (obj.Model === target.value) {
        return obj.Year;
      }
      return null; //this due to react warning for arrow functions to return something all the time, NEEDS FIX ON RETURNING EMPTY OBJECT
    });
    this.setState({ years: carYears });
  };
  render() {
    //map out each fetched item's property, weed out repetition with Set(), turn it back into array
    const uniqueMakerList = Array.from(
      new Set(this.state.data.map(item => item.Manufacturer))
    );
    //map out options for dropdown menu
    const makerOptions = uniqueMakerList.map(item => (
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
          {makerOptions}
        </select>

        <select
          name="Model"
          defaultValue={this.state.models}
          onChange={this.handleChange}
        >
          <option value={null} label="-Model-" />
          {// needs fixing on duplicate models (See Maker)
          this.state.models &&
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
          {
            // needs fixing on duplicate Years (See Maker)
            /* this.state.years &&                   ----needs fix on Maker change
            this.state.years.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            )) */
          }
        </select>
      </div>
    );
  }
}
