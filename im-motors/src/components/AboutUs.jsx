import React, { Component } from "react";

import Footer from "./Footer.jsx";
import UserContact from "./contactForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ContacInfo from "./contactInfo";

// import Users from "./users";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="body">
        <p>
          Here are some text which describe company's mission.Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old.
        </p>
        <div className="all-contact-wrapper">
          <UserContact />
          <ContacInfo />
        </div>

        <Footer />
      </div>
    );
  }
}
