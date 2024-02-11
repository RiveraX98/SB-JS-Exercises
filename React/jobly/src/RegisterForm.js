import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Form } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <Card>
      <CardBody>
        <Form method="post" action="/signup">
          <div className="mb-3">
            <label htmlFor="username">Username </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username">Password </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firstName">First Name </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <Button className="fw-bold" color="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export const RegisterFormAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    username: data.get("username"),
    password: data.get("password"),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
  };

  return submission;
};
