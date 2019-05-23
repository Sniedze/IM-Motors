import React, { Component } from "react";
import Star from "../../assets/Star.png";

export default class ReviewPosts extends Component {
  createStarImages = n => {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(
        <img key={Math.random()} src={Star} alt={"Yellow Star"} height="20" />
      );
    }
    return stars;
  };

  render() {
    return this.props.posts.map(item => (
      <div key={item._id} className="review-posts">
        <h3>{item.person}</h3>
        {this.createStarImages(item.stars)}
        <p>{item.feedback}</p>
      </div>
    ));
  }
}
