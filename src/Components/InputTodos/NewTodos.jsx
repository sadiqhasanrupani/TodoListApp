import React from "react";
import Card from "../UI/Card";
import FormTodos from "./FormTodos"
import "./NewTodo.css"

const NewTodo = (props) => {

  const addTodoData = (formData) => {
    props.onNewTodos(formData);
  }

  return (
    <Card className="todo-card">
      <FormTodos onFormTodos={addTodoData}/>
    </Card>
  );
};

export default NewTodo;
