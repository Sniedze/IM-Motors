import React, { Component } from "react";
import SocialMedia from "./socialMedia";
class ContactInfo extends Component {
  state = {};
  render() {
    return (
      <div className="contact-info-wrapper">
        <div className="contact-info">
          1574 Stratford Ave Stratford, CT 06615 <br /> (475) 234-3912
        </div>
        <SocialMedia />
        <div>
          Working hours
          <ul>
            <li>Monday-Friday : 8:00-18:00 </li>
            <li>Saturday : 8:00-16:00 </li>
            <li>Sunday : By appointment only </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
