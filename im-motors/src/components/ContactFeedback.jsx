import React, { Component } from "react";
class ContactFeedback extends Component {
  state = {};
  render() {
    let contactfeedbackClasses = "b-feedback-modal";
    if (this.props.showContactFeedback) {
      contactfeedbackClasses = "b-feedback-modal b-feedback-open";
    }

    return (
      <div className={contactfeedbackClasses}>
        <h1>Dear Customer</h1>
        <p>
          Thank you for your interest in IM Motors.Our customer support come
          back to you as soon as they can.
        </p>
        <div id="close" onClick={this.props.closefeedback}>
          close
        </div>
      </div>
    );
  }
}

export default ContactFeedback;
