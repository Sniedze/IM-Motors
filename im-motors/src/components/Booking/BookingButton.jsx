import React, { Component } from "react";

class BookingButton extends Component {
  state = {};

  render() {
    return (
      <button onClick={this.props.handleModal} className="booking-btn">
        Book a Drive test
      </button>
    );
  }
}

export default BookingButton;
