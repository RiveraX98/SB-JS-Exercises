import React, { useEffect } from "react";
import { RegisterForm } from "./RegisterForm";
import { useActionData, useNavigate } from "react-router-dom";
import JoblyApi from "./api";
import { useLocalStorage } from "./useLocalStorage";

export const SignUp = () => {
  const navigate = useNavigate();
  let data = useActionData();
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    async function register() {
      console.log("inregister:", data);
      const res = await JoblyApi.register(data);
      setToken(res.token);
      //   navigate("/companies");
    }
    register();
  }, [data]);

  return (
    <div className="mt-5">
      <div className="col-lg-4 offset-lg-4">
        <h3 className="title">Sign Up</h3>
        <RegisterForm />
      </div>
    </div>
  );
};
