import React, { useState } from "react";
import TodoBox from "./Components/Todos/TodoBox";
import NewTodo from "./Components/InputTodos/NewTodos";

const DEFAULT_TODOS = [
  {
    key: "t-1",
    todo: "Write you todos in the textbox",
  },
];

const App = () => {

  const [todosData, setTodos] = useState(DEFAULT_TODOS);

  const addFormData = (formData) => {
    setTodos((prevTodos) => {
      return [formData, ...prevTodos]
    })
  };

  return (
    <div>
      <div>
        <NewTodo onNewTodos={addFormData} />
      </div>
      <div>
        <TodoBox todos={todosData} />
      </div>
    </div>
  );
};

export default App;
