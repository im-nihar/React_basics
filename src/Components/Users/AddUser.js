import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (checkValidationName(username, age)) return
    if (checkValidationAge(age)) return;
    const list = { username, age }
    props.onAddUser(list)
    resetForm();
  };

  const checkValidationName = (username, age) => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return true
    }
    return false;
  }

  const checkValidationAge = (age) => {
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return true
    }
    return false;
  }

  const errorHandler = () => {
    // null treated as falsy value
    setError(null);
  };

  const resetForm = () => {
    setUsername('');
    setAge('');
  }


  return (
    <div>
      {error &&
        <ErrorModal title={error.title} message={error.message} onClose={errorHandler} />
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {/* <button type='submit'>Add User</button> */}
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
