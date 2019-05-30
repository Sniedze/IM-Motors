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
        <h4>{item.person}</h4>
        <span>{this.createStarImages(item.stars)}</span>
        <p>{item.feedback}</p>

      
      </div>
    ));
  }
}
