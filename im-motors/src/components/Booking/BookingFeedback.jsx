import React, { Component } from "react";
class BookingFeedback extends Component {
  state = {};
  render() {
    let bookingfeedbackClasses = "b-feedback-modal";
    if (this.props.showBookingFeedback) {
      bookingfeedbackClasses = "b-feedback-modal b-feedback-open";
    }
    console.log(this.props);

    return (
      <div className={bookingfeedbackClasses}>
        <h1>Dear Customer</h1>
        <p>
          Thank you for booking a test drive with us. Our customer support will
          contact you within 2 working days to confirm the schedule.
        </p>
        <div id="close" onClick={this.props.closefeedback}>
          close
        </div>
      </div>
    );
  }
}

export default BookingFeedback;
