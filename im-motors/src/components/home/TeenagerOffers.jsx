import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";


export default class TeenagerOffer extends Component {
  render() {
       
  
let teenageCars= this.props.data.filter(obj => {
     return obj.TeenagerOffer ===true
})
let teenageCarPosts=(
    teenageCars.map(car=>(
    <div className="teenage-car" >
<Link to={`/blog/${"teenagers"}`}>
  <React.Fragment>
    <h2>{car.Title}</h2>
    <img
      alt={car.alt}
      src={`https://immotors-65ac.restdb.io/media/${car.SmallImage}`}
    />
    <p className="short-description">{car.ShortDescription}</p>
    <p className="date">{car.CreationDate}</p>
  </React.Fragment>
</Link>
</div>)));
console.log(teenageCars)
    return(
      {teenageCarPosts}
    );

  }
}
