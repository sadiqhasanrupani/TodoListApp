import React, { useState } from "react";
import "./FormTodos.css"

const FormTodos = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  let [count, setCount] = useState(0);

  const getInput = (e) => {
    setEnteredInput(e.target.value);
  };

  
  const formSubmit = (e) => {
    e.preventDefault();
    
    setCount(count += 1); 
    
    const formData = {
      todo: enteredInput,
      key: count,
    };

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
          />
        </div>
        <div className="add-btn">
          <button>Add</button>
        </div>
      </div>
    </form>
  );
};

export default FormTodos;
