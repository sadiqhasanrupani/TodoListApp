import React, { useState } from "react";
import TodoBox from "./Components/Todos/TodoBox";
import NewTodo from "./Components/InputTodos/NewTodos";
import "./App.css";

const App = () => {
  const [todosData, setTodos] = useState([]);

  const addFormData = (formData) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ ...formData });
      return updatedTodos;
    });
  };

  const onDeleteHandler = (todoId) => {
    // console.log("From app")
    // console.log(todoId)
    setTodos((prevTodos) => {
      let index = prevTodos
        .map((id) => {
          return id.key;
        })
        .indexOf(todoId);

      console.log(index);

      prevTodos.splice(index, ++index);

      let updatedTodos = [...prevTodos];

      console.log(updatedTodos);

      return updatedTodos;
    });
  };

  return (
    <div>
      <div>
        <NewTodo onNewTodos={addFormData} />
      </div>
      <div>
        <TodoBox
          deleteHandler={onDeleteHandler}
          todos={todosData}
          Data={todosData.length}
        />
      </div>
    </div>
  );
};

export default App;
