import React from "react";
import { Form } from "react-router-dom";

export const ColorForm = () => {
  return (
    <div>
      <p>Add a color</p>
      <Form method="post" action="/colors">
        <label htmlFor="color-name">Name</label>
        <input id="color-name" type="text" placeholder="red" name="name" />
        <label htmlFor="color-picker">Color</label>
        <input id="color-picker" type="color" name="color" />
        <button>add</button>
      </Form>
    </div>
  );
};

export const colorAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    color: data.get("color"),
    name: data.get("name"),
  };
  return submission;
};
