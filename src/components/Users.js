import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  constructor() {
    // When you add the constructor to your class
    // and you extend another class, you need to call super
    // which calls the constructer of the super class
    // so of the class we're inheriting from
    super();

    // in class bases component, this.state has to be an object.
    // in functional based it is flexible.
    // and we have to write "this.state", cannot change it.
    // group all the states that make up a component into one object.
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }


  toggleUsersHandler() {
    // setState merges with the state and not overwrite the state.
    // But overwrites the value in useState.
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    // we can define helper constants like this.
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
