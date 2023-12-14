import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addItem = (newItem) => {
    setTodos((items) => [...items, { ...newItem, id: uuid() }]);
  };

  const removeItem = (toRemove) => {
    setTodos(todos.filter((item) => item.id !== toRemove));
  };

  return (
    <div>
      <h1>Things To Do</h1>
      <NewTodoForm addItem={addItem} />
      <div>
        <ul>
          {todos.map((item) => (
            <Todo
              removeItem={removeItem}
              id={item.id}
              item={item.todo}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
