import React, { Component } from "react";
export default class sortByPrice extends Component {
  sorter = fetched => {
    /* const array = fetched.sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      } else if (a.age === b.age) {
        return 0;
      } else {
        return 1;
      }
    }); */
    console.log(this.props.currentInventory);
  };
  render() {
    return (
      <button id="ascendingBtn" onClick={this.sorter}>
        Ascending
      </button>
    );
  }
}
