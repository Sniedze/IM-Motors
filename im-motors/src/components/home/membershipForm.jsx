import React, { Component } from "react";
import UserContact from "../contactForm.jsx";

class MembershipForm extends Component {
  state = {};
  render() {
    return (
      <div className="membership-form">
        <h2> Just a few steps to get all benefits</h2>
        <UserContact />
      </div>
    );
  }
}

export default MembershipForm;
