import React, { Component } from "react";
class FeedBackModal extends Component {
  state = {};
  render() {
    let feedbackClasses = "feedback-modal";
    if (this.props.showFeedback) {
      feedbackClasses = "feedback-modal feedback-open";
    }
    return (
      <div className={feedbackClasses}>
        <h2>Congratulations!</h2>
        <p>
          The cinema tickets and other relavant information about your
          membership are sent to your Email. Check it out and enjoy.{" "}
        </p>
        <div id="close" onClick={this.props.closefeedback}>
          close
        </div>
      </div>
    );
  }
}

export default FeedBackModal;
