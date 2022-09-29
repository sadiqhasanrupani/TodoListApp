import React, { useState } from "react";
import Card from "../UI/Card";
import "./Todos.css";
const Todos = (props) => {

  const [isValid, setIsValid] = useState(false)

  const deleteHandler = () => {
    props.onDelete(props.id);
    // console.log(props.id);
  };

  const doneStroke = () => {
    setIsValid(turnOff => !turnOff)
  };

  return (
    <div>
      <Card className="todos-card">
        <div className="todo-flex">
          <div className="todo-item" style={isValid ? {textDecoration:"line-through", color:"GrayText"}: {textDecoration:"none", color:"black"}}>-&nbsp;{props.name}</div>
          <div className="buttons">
            <div>
              <button onClick={doneStroke}>Done</button>
            </div>
            <div>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Todos;
