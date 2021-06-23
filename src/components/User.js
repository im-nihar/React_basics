import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  constructor() {
    super();
  }

  // WIll run 3 times, we rendered 3 users.
  // All 3 instances of that component were removed.
  componentWillUnmount() {
    console.log('User will unmount!');
  }


  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
