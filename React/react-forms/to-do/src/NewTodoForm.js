import React, { useState } from "react";

const NewTodoForm = ({ addItem }) => {
  const INITIAL_STATE = { todo: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });

    setFormData(INITIAL_STATE);
  };
  return (
    <div>
      <label htmlFor="Todo-item">ToDo</label>
      <form id="Todo-item" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="wash dishes"
          name="todo"
          value={formData.todo}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
