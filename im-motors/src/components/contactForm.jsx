import React, { Component } from "react";
import axios from "axios";
//import "./bootstrap/dist/css/bootstrap.min.css";

class UserContact extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    message: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    const user = this.state;
    axios
      .post(`http://5ccaeb4c54c8540014835107.mockapi.io/postmessage`, { user })
      .then(res => {
        console.log(res.data);
      });
    e.target.reset();
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
      </div>
    );
  }
}

export default UserContact;
