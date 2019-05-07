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
            <li>Monday-Thursday : 8:00-16:00 </li>
            <li>Monday-Thursday : 8:00-16:00 </li>
            <li>Friday : 8:00-15:00 </li>
            <li>Saturday-Sunday : 9:00-12:00 </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
