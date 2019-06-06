import React, { Component } from "react";
// import "./bootstrap/dist/css/bootstrap.min.css";
class MembershipContactForm extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    message: null
  };

  render() {
    return (
      <div className="form-container membership-form-container">
        <form onSubmit={this.props.handleSubmit}>
          <div className=" form-group ">
            <label htmlFor="firstname">First name</label>
            <span className="required">*</span>

            <input
              type="text"
              id="firstname"
              className="form-control"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className=" form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <span className="required">*</span>
            <input
              type="text"
              id="email"
              className="form-control"
              onChange={this.props.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              type="text"
              id="message"
              className="form-control"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="submit-button-container">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MembershipContactForm;
