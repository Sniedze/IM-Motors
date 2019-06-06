import React, { Component } from "react";
import { Link } from "react-router-dom";
import Play from "../../assets/play-button.png";

class VideoLink extends Component {
  state = {};
  render() {
    return (
      <div className="video-container">
        <Link to="/video">
          <p>Video about becoming a member</p>
          <img
            className="play-button"
            src={Play}
            alt="Play button, a triangle"
          />
        </Link>
      </div>
    );
  }
}

export default VideoLink;
