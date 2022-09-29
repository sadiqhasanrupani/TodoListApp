import React, { useState } from "react";
import "./FormTodos.css";

const FormTodos = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  let [count, setCount] = useState(0);
  let [isValid, setIsValid] = useState(false)

  const getInput = (e) => {
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
      setIsValid(true)
      // console.log(isValid)
      return;
    }
    else {
      setIsValid(false)
    }
    // console.log(formData);
    // console.log(typeof(enteredInput));

    props.onFormTodos(formData);

    setEnteredInput("");
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="flex">
        <div>
          <input
            type="text"
            value={enteredInput}
            placeholder="Type your todos here"
            onChange={getInput}
            style={!isValid ? {borderColor:"gray"}: {border:"2px solid red"}}
          />
        </div>
        <div className="add-btn">
          <button className="add-button">Add</button>
        </div>
      </div>
    </form>
  );
};

export default FormTodos;