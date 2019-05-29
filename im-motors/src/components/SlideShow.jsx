import React from "react";
import ForwardArrow from "../assets/forward-arrow.png";
import BackArrow from "../assets/back-arrow.png";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
  }

  previousSlide = () => {
    const lastIndex = this.props.slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    let noImage = "https://immotors-65ac.restdb.io/media/";
    const lastIndex = this.props.slides.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;

    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    let noImage = "https://immotors-65ac.restdb.io/media/";
    //console.log(this.props.slides);
    console.log(this.props.slides);
    return (
      <div className="carousel">
        <img
          className="arrow back-arrow"
          src={BackArrow}
          onClick={this.previousSlide}
          alt="Back arrow"
        />
        <img
          className="image-slide"
          src={this.props.slides[this.state.currentImageIndex]}
          //src={this.props.src}
          alt=""
        />
        <img
          className="arrow forward-arrow"
          src={ForwardArrow}
          onClick={this.nextSlide}
          alt="Forward arrow"
        />
      </div>
    );
  }
}
