import React, { Component } from "react";

import Tweeter from "../../assets/tweeterblack.png";
import FB from "../../assets/fb-black.png";
import Instagram from "../../assets/instagram-black.png";
import Phone from "../../assets/phone-black.png";
import Address from "../../assets/address.png";
class LandingPFooter extends Component {
  state = {};
  render() {
    return (
     
        <div className="contactinfo-container">
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
              <p> 1574 Stratford av., Stratford, CT 06615 </p>
            </div>
          </div>
        </div>
        
       
     
    );
  }
}

export default LandingPFooter;
