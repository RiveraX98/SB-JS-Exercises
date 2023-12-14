import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { height: "", width: "", color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        placeholder="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>

      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        placeholder="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>

      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        placeholder="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default NewBoxForm;
