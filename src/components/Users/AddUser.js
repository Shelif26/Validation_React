import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModule";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (
      (enteredUsername.trim().length === 0) === String ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input !",
        message: "Please enter a valid name and age ( Non-empty values ) ",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age !",
        message: "Please enter valid age ( age > 0) ",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            autoComplete="off"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            autoComplete="off"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
