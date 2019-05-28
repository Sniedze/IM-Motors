import React, { Component } from "react";
import Menu from "./Menu.jsx";


export default class SlideShow extends Component {
    constructor(props) {
        super(props);
  this.state = {
    currentImageIndex: 0,
    images: [
      { id: 1, src: require(this.props.src1) },
      { id: 2, src: require(this.props.src2) },
      { id: 3, src: require(this.props.src3) },
     
    ]
    }}
    previousSlide=()=> {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide=()=> {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      render() {
        return (
          <div className="carousel">
            <Arrow
              direction="left"
              clickFunction={this.previousSlide}
              glyph="&#9664;"
            />
            <img
              className="image-slide"
              src={this.state.images[this.state.currentImageIndex].src}
              alt=""
            />
            <Arrow
              direction="right"
              clickFunction={this.nextSlide}
              glyph="&#9654;"
            />
          </div>
        );
      }
    }
    
    const Arrow = ({ direction, clickFunction, glyph }) => (
      <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
        {glyph}
      </div>
    );
    

