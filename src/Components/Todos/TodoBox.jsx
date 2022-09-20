import React from "react";
import Card from "../UI/Card";
import Todos from "./Todos";
import "./TodoBox.css";

const TodoBox = (props) => {
  return (
    <Card className="todo-box">
      <div className="todo-head">
        <h3>Todo List</h3>
      </div>
      <div>
        {props.todos.map((todo) => {
          return <Todos
            key={todo.key}
            name={todo.todo}
          />
        })}
      </div>
    </Card>
  );
};

export default TodoBox;
