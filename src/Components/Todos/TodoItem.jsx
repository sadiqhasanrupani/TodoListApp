import React from "react";
import Todos from "./Todos";
export default function TodoItem(props) {

  const deleteHandler = (idData) => {
    props.onDelete(idData)
    // console.log(idData)
  }

  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Todos 
            key={todo.key}
            id={todo.key}
            name={todo.todo}
            onDelete={deleteHandler}
          />
        );
      })}
    </div>
  );
}
