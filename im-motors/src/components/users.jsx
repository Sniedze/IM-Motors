import React, { Component } from "react";
class Users extends Component {
  state = {};
  render() {
    //Destructuring ->
    const { users } = this.props;
    console.log("props", users);
    const userList = users.map(user => {
      return (
        <div key={user.id}>
          <h2>Name is: {user.firstname}</h2>
          <h3>last name is :{user.lastname}</h3>
        </div>
      );
    });
    return <div className="user-list"> {userList};</div>;
  }
}

export default Users;
