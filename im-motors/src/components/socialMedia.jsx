import React, { Component } from "react";
class SocialMedia extends Component {
  render() {
    return (
      <div className="social-wrapper">
        <div className="social" id="fb" />
        <div className="social" id="tweeter" />
        <div className="social" id="email" />
      </div>
    );
  }
}

export default SocialMedia;
