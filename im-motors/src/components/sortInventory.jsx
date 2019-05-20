import React, { Component } from "react";
export default class sortInventory extends Component {
  sorter = fetched => {
    const array = fetched.sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      } else if (a.age === b.age) {
        return 0;
      } else {
        return 1;
      }
    });
    console.log(array);
    return array;
  };
  render() {
    return (
      <div>
        <div>{this.array}</div>

        <button onClick={this.sorter} fetched={this.props.fetched}>
          Ascending
        </button>
      </div>
    );
  }
}
