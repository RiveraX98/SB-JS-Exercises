import React, { useEffect } from "react";
import { RegisterForm } from "./RegisterForm";
import { useActionData } from "react-router-dom";
import JoblyApi from "./api";
import { useLocalStorage } from "./useLocalStorage";

export const SignUp = () => {
  let data = useActionData();
  const [token, setToken] = useLocalStorage("token", null);
  console.log(data);

  useEffect(() => {
    async function register() {
      console.log("INSIDE");
      const res = await JoblyApi.register(data);
      setToken(res.token);
      // useNavigate("/companies")
    }
    register();
  }, [data]);
  console.log(token);
  return (
    <div className="mt-5">
      <div className="col-lg-4 offset-lg-4">
        <h3 className="title">Sign Up</h3>
        <RegisterForm action={"/signup"} />
      </div>
    </div>
  );
};
