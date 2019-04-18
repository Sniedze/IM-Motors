import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="Click to select a date"
      />
    );
  }
}
