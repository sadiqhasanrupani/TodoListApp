import React from "react";
import Card from "../UI/Card";
import "./Todos.css";
const Todos = (props) => {
  return (
    <Card className="todos-card">
      <div className="todo-flex">
        <div className="todo-item">
          -&nbsp;{props.name}
        </div>
        <div className="del">
          <button>Delete</button>
        </div>
      </div>
    </Card>
  );
};

export default Todos;
