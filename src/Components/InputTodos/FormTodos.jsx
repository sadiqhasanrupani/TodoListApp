import React, { useState } from "react";
import styled from "styled-components";
import "./FormTodos.css";

// Using Styled Components
const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  justify-content: space-between;

  & div {
    max-width: 90%;
    width: 40%;
  }

  & div input {
    width: 100%;
    height: 2rem;
    padding-left: 10%;
    outline: none;
    border: 2px solid ${(props) => (props.invalid ? "#FF001E" : "white")};
    background-color: ${props => props.invalid ? '#E7D3FF' : ''};
    border-radius: 5px;
  }

  & input::placeholder {
    color: ${props => props.invalid ? '#FF001E' : ''};
    font-weight: ${props => props.invalid ? '600' : ''};
  }
  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: left;
    }
    & div {
      width: 100%;
    }
    & div input {
      width: 10rem;
    }
  }
`;

const FormTodos = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  let [count, setCount] = useState(0);
  let [isValid, setIsValid] = useState(false);

  const getInput = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(false);
    }
    setEnteredInput(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setCount((count += 1));

    const formData = {
      todo: enteredInput,
      key: count,
    };
    if (enteredInput.trim().length === 0) {
      setIsValid(true);
      console.log(isValid);
      return;
    }
    // else {
    //   setIsValid(false)
    // }
    // console.log(formData);
    // console.log(typeof(enteredInput));

    props.onFormTodos(formData);

    setEnteredInput("");
  };

  return (
    <form onSubmit={formSubmit}>
      <FormControl invalid={isValid}>
        <div>
          <input
            type="text"
            value={enteredInput}
            placeholder="Type your todos here"
            onChange={getInput}
          />
        </div>
        <div className="add-btn">
          <button className="add-button">Add</button>
        </div>
      </FormControl>
    </form>
  );
};

export default FormTodos;
