import React, { Component } from "react";
import KBB from "../assets/kbb.png";
import SlideShow from "./SlideShow";
import BookingButton from "./Booking/BookingButton";
import BookingModal from "./Booking/BookingModal";
import UserContact from "./contactForm";
export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      src1: null,
      src2: null,
      src3: null,
      src4: null,
      images: [],
      bookingModalOpen: false
    };
  }
  handleModalBtn = () => {
    this.setState(prevState => {
      console.log("works");
      return { bookingModalOpen: !prevState.bookingModalOpen };
    });
  };
  closeModalHandler = () => {
    this.setState({
      bookingModalOpen: false
    });
  };
  createImageArray = () => {
    let imagesArray = [
      this.state.src1,
      this.state.src2,
      this.state.src3,
      this.state.src4
    ];

    for (let i = 0; i < imagesArray.length; i++) {
      if (imagesArray[i] === "https://immotors-65ac.restdb.io/media/") {
        imagesArray.splice(i);
      }
    }

    return this.setState({ images: imagesArray });
  };

  componentDidMount() {
    this.renderMyData();
  }

  renderMyData = () => {
    const {
      match: { params }
    } = this.props;

    fetch(`https://immotors-65ac.restdb.io/rest/cars/${params.carId}`, {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5ce2d6b1780a473c8df5c9ef",
        "cache-control": "no-cache"
      }
    })
      .then(e => e.json())
      .then(car => {
        this.setState({ data: car });
        this.renderImages(this.state.data);
        this.createImageArray();
      });
  };

  renderImages = data => {
    this.setState({
      src1: `https://immotors-65ac.restdb.io/media/${data.MainImage}`
    });
    this.setState({
      src2: `https://immotors-65ac.restdb.io/media/${data.Image2}`
    });
    this.setState({
      src3: `https://immotors-65ac.restdb.io/media/${data.Image3}`
    });
    this.setState({
      src4: `https://immotors-65ac.restdb.io/media/${data.Image4}`
    });
  };

  render() {
    return (
      <div className="one-car">
        <h2>
          {this.state.data.Year} {this.state.data.Manufacturer}{" "}
          {this.state.data.Model} {this.state.data.Engine}
        </h2>

        <SlideShow slides={this.state.images} keys={this.state} />

        <p>{this.state.data.LongDescription}</p>
        <p>Mileage: {this.state.data.Mileage} mi</p>
        <p>Price: ${this.state.data.Price}</p>
        <p className="member-price">
          Member`s Price: <span>${this.state.data.MemberPrice}</span>
        </p>
        <p>Mileage: {this.state.data.Mileage} mi</p>
        <img className="kbb" src={KBB} alt="Kelly Blue Book icon" />
        <p className="kbb-price">${this.state.data.KBB}</p>
        <BookingButton handleModal={this.handleModalBtn} />
        <BookingModal
          showModal={this.state.bookingModalOpen}
          closeModal={this.closeModalHandler}
        />
        <div className="contactUs">
          <h2>Contact us regarding this vehicle:</h2>
          <UserContact />
        </div>
      </div>
    );
  }
}
