import React, { Component } from "react";
import SocialMedia from "./socialMedia";
class ContactInfo extends Component {
  state = {};
  render() {
    return (
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <p>
            <i className="fa fa-map-marker-alt" aria-hidden="true" />
            <span> </span>1574 Stratford Ave Stratford, CT 06615{" "}
          </p>
          <p>
            <i className="fas fa-phone" />
            <span> </span>(475) 234-3912
          </p>
          <SocialMedia />
        </div>

        <div className="working-hours">
          <ul>
            <h4>Working hours :</h4>

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
