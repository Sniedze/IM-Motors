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
        {item.stars > 2 && <h4>{item.person}</h4>}
        {item.stars > 2 && <span>{this.createStarImages(item.stars)}</span>}
        {item.stars > 2 && <p>{item.feedback}</p>}

        {item.stars > 2 && <hr />}
      </div>
    ));
  }
}
