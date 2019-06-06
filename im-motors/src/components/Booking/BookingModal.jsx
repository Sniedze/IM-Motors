import React, { Component } from "react";
import DatePicker from "react-datepicker";
import BookingFeedback from "./BookingFeedback";

import "react-datepicker/dist/react-datepicker.css";
class BookingTestDrive extends Component {
  state = {
    name: null,
    email: null,
    phone: null,
    testDate: new Date(),
    bookingfeedbackMessage: false
  };

  handleBookingFeedbackModal = () => {
    this.setState(prevState => {
      return { bookingfeedbackMessage: !prevState.bookingfeedbackMessage };
    });
  };
  handleCloseFeedback = () => {
    this.setState({ bookingfeedbackMessage: false });
    this.props.closeModal();
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleDateChange = date => {
    this.setState({
      testDate: date
    });
  };
  handleBookingTest = e => {
    e.preventDefault();
    const data = this.state;

    fetch("https://immotors-65ac.restdb.io/rest/drivetestbooking ", {
      async: true,
      crossDomain: true,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      },
      processData: false,
      body: JSON.stringify(data)
    }).then(response => {
      response.json();
    });
    e.target.reset();

    this.handleBookingFeedbackModal();
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
            <span className="required">*</span>

            <input
              className="form-control"
              id="email"
              type="email"
              onChange={this.handleChange}
              required
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
              selected={this.state.testDate}
              onChange={this.handleDateChange}
            />
          </div>
          <div className="submit-booking-btn">
            <button id="submit-booking" type="submit">
              Book my Drive Test
            </button>
          </div>
        </form>
        <div id="b-feedback">
          <BookingFeedback
            showBookingFeedback={this.state.bookingfeedbackMessage}
            closefeedback={this.handleCloseFeedback}
          />
        </div>
      </div>
    );
  }
}

export default BookingTestDrive;
