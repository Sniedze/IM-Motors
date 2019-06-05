import React, { Component } from "react";
import { Link } from "react-router-dom";

class VideoLink extends Component {
  state = {};
  render() {
    return (
      <Link to="/video">
        <p>See video</p>
      </Link>
    );
  }
}

export default VideoLink;
