import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & p {
    color: white;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #efbcde;
  }

  &.invalid label {
    color: red;
  }

  &.invalid p {
    color: rgb(130, 16, 244);
  }
`;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid ? "invalid" : ""}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
        <p>Please enter some valid goals</p>
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
