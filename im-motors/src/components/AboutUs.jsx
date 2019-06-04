import React, { Component } from "react";

import Footer from "./Footer.jsx";
import UserContact from "./contactForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-page">
        <p>
          IM Motors is a used car dealership and car repair service with more
          than 10 years’ experience in the market. In IM Motors, our mission is
          to improve everyday lives of people by providing them with reliable
          vehicles and high-quality customer service.
        </p>

        <UserContact />
        <Footer />
      </div>
    );
  }
}
