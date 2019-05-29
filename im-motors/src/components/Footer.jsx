import React, { Component } from "react";
import Tweeter from "../assets/tweeterblack.png";
import FB from "../assets/fb-black.png";
import Instagram from "../assets/instagram-black.png";
import Phone from "../assets/phone-black.png";
import Address from "../assets/address.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contactinfo-container">
          <section className="soMe">
            <div className="soMe-icons">
              <img id="fb" src={FB} alt="facebook" />
              <img id="twt" src={Tweeter} alt="tweeter" />
              <img id="insta" src={Instagram} alt="instagram" />
            </div>
            <div className="phone-address">
              <div className="phone">
                <img src={Phone} alt="phone" />
                <p> (475) 234-3912</p>
              </div>
              <div className="address">
                <img src={Address} alt="phone" />
                <p> 1574 Stratford Ave </p>
              </div>
            </div>
          </section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.6133721334145!2d-73.14261198505395!3d41.18659927928308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80c540ed85383%3A0x1f19914bf8341e26!2s1574+Stratford+Ave%2C+Stratford%2C+CT+06615%2C+USA!5e0!3m2!1sen!2sdk!4v1559070448677!5m2!1sen!2sdk"
            width="400"
            height="300"
            frameBorder="0"
            allowFullscreen
            title="AdressMap"
          />
        </div>
      </div>
    );
  }
}
