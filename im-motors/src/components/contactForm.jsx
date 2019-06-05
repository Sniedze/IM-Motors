import React, { Component } from "react";
//import "./bootstrap/dist/css/bootstrap.min.css";
import ContactFeedback from "./ContactFeedback";
class UserContact extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    message: null,
    contactfeedbackMessage: false
  };

  handleContactFeedbackModal = () => {
    this.setState(prevState => {
      return { contactfeedbackMessage: !prevState.contactfeedbackMessage };
    });
  };
  handleCloseFeedback = () => {
    this.setState({ contactfeedbackMessage: false });
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;

    fetch("https://immotors-65ac.restdb.io/rest/regular-contact-form", {
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
    event.target.reset();
    this.handleContactFeedbackModal();
  };

  render() {
    return (
      <div className="form-container membership-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className=" form-group ">
            <label htmlFor="firstname">First name</label>
            <span className="required">*</span>

            <input
              type="text"
              id="firstname"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className=" form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <span className="required">*</span>
            <input
              type="text"
              id="email"
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              type="text"
              id="message"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="submit-button-container">
            <button className="submit-button">Submit</button>
          </div>
        </form>
        <ContactFeedback
          showContactFeedback={this.state.contactfeedbackMessage}
          closefeedback={this.handleCloseFeedback}
        />
      </div>
    );
  }
}

export default UserContact;
