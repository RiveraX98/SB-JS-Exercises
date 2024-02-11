import React, { useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Form } from "react-router-dom";
import { useActionData, useNavigate } from "react-router-dom";
import JoblyApi from "./api";
import { useLocalStorage } from "./useLocalStorage";

export const Login = () => {
  let data = useActionData();
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token", null);
  console.log(data);

  useEffect(() => {
    async function login() {
      console.log("runnning");
      const res = await JoblyApi.login(data);
      console.log("token", res.token);
      JoblyApi.token = res.token;
      setToken(res.token);
      navigate("/companies");
    }
    login();
  }, [data]);

  return (
    <div className="mt-5">
      <div className="col-lg-4 offset-lg-4">
        <h3 className="title">Login</h3>
        <Card>
          <CardBody>
            <Form method="post" action="/login">
              <div className="mb-3">
                <label htmlFor="username">Username </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  formAction="/profile"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="d-grid">
                <Button className="fw-bold" color="primary">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export const LoginFormAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    username: data.get("username"),
    password: data.get("password"),
  };

  return submission;
};
