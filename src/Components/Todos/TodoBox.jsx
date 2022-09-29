import React from "react";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import "./TodoBox.css";

const TodoBox = (props) => {

  let content;

  if(props.Data=== 0) {
    content = <p className="content">Todos are Empty!</p>;
  }

  return (
    <Card className="todo-box">
      <div className="todo-head">
        <h3>Todo List</h3>
      </div>
      <div>{content}</div>
      <div>
        <TodoItem onDelete={props.deleteHandler} todos={props.todos}/>
      </div>
    </Card>
  );
};

export default TodoBox;
