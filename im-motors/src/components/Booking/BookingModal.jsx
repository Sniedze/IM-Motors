import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
class BookingTestDrive extends Component {
  state = {
    name: null,
    email: null,
    phone: null,
    startDate: new Date()
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleBookingTest = e => {
    const user = this.state;
    axios
      .post(`http://5ccaeb4c54c8540014835107.mockapi.io/postmessage`, { user })
      .then(res => {
        console.log(res.data);
      });
    e.target.reset();
  };
  render() {
    let modalClasses = "booking-container";
    if (this.props.showModal) {
      modalClasses = "booking-container open-modal";
    }
    return (
      <div className={modalClasses}>
        {" "}
        <div className="closebtn" onClick={this.props.closeModal}>
          <span>&#x2715;</span>
        </div>
        <form onSubmit={this.handleBookingTest}>
          <div className="form-group">
            <label> Full name </label>
            <span className="required">*</span>

            <input
              className="form-control"
              id="name"
              type="text"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label> Email Address </label>
            <input
              className="form-control"
              id="email"
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label> Phone Number </label>
            <span className="required">*</span>
            <input
              className="form-control"
              type="tel"
              id="phone"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label> Select Date : </label>
            <DatePicker
              id="date"
              className="form-control"
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
          </div>
          <button id="submit-booking" type="submit">
            Book my Drive Test
          </button>
        </form>
      </div>
    );
  }
}

export default BookingTestDrive;
