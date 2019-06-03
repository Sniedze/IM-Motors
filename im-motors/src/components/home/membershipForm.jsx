import React, { Component } from "react";
import FeedBackModal from "../FeedbackModal";
import MembershipContactForm from "../membershipContactForm";
class MembershipForm extends Component {
  state = {
    feedbackMessage: false
  };
  handleFeedbackModal = () => {
    this.setState(prevState => {
      return { feedbackMessage: !prevState.feedbackMessage };
    });
  };
  handleCloseFeedback = () => {
    this.setState({ feedbackMessage: false });
  };
  render() {
    return (
      <div className="membership-form">
        <h2> Just a few steps to get all benefits</h2>
        <div id="li-wrapper">
          <li>- Discount for the first purchase</li>
          <li>- Get free cinema tickets</li>
          <li>- Collect loyalty points</li>
        </div>
        <FeedBackModal
          showFeedback={this.state.feedbackMessage}
          closefeedback={this.handleCloseFeedback}
        />
        <MembershipContactForm submitBtnHandler={this.handleFeedbackModal} />
      </div>
    );
  }
}

export default MembershipForm;
