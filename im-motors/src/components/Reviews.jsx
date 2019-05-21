import React, { Component } from "react";

export default class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <h2>Customers about IM Motors:</h2>
        <form>
          <div className="name">
            <label>Name</label>
            <span className="required">*</span>
            <input
              onChange={this.props.handleChange}
              defaultValue={this.props.name}
              name="name"
              noValidate
            />
            {/* {this.props.errors.fullName.length > 0 && (
              <span className="errorMessage">{this.props.errors.fullName}</span>
            )} */}
          </div>
          <div className="feedback">
            <label>Your Feedback</label>
            <span className="required">*</span>
            <textarea
              onChange={this.props.handleChange}
              defaultValue={this.props.feedback}
              name="feedback"
              noValidate
            />
            {/* {this.props.errors.ssn.length > 0 && (
              <span className="errorMessage">{this.props.errors.ssn}</span>
            )} */}
          </div>

          <div className="stars">
            <label>Star Rating</label>
            <select
              onChange={this.props.handleChange}
              defaultValue={this.props.stars}
              name="stars"
              noValidate
            >
              <option value="" label="--" />
              <option key="five" value="Male" label={"✩✩✩✩✩"} />
              <option key="four" value="Female" label="✩✩✩✩" />
              <option key="three" value="Other" label="✩✩✩" />
              <option key="two" value="Female" label="✩✩" />
              <option key="one" value="Male" label="✩" />
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
