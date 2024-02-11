import "./Jobly.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { UserContext } from "./UserContext";
import { JoblyNavbar } from "./Navbar";
import { Homepage } from "./Homepage";
import { Logout } from "./Logout";
import { CompanyList } from "./CompanyList";
import { CompanyDetails } from "./CompanyDetails";
import { Jobs } from "./Jobs";
import { Profile } from "./Profile";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { RegisterFormAction } from "./RegisterForm";
import { LoginFormAction } from "./Login";
import { EditProfileAction } from "./ProfileCard";
import JoblyApi from "./api";

function App() {
  const [currUser, setCurrUser] = useState();
  const [userToken, setToken] = useState(window.localStorage.token);

  useEffect(() => {
    async function getUser() {
      JoblyApi.token = userToken;
      const decoded = jwtDecode(userToken);
      const user = await JoblyApi.getUser(decoded.username);
      setCurrUser(user.user);
    }
    getUser();
  }, [userToken]);

  console.log("curruser:", currUser);

  const Root = () => {
    <>
      <JoblyNavbar />
      <div>
        <Outlet />
      </div>
    </>;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" action={LoginFormAction} element={<Login />} />
          <Route
            path="/signup"
            element={<SignUp />}
            action={RegisterFormAction}
          />

          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <UserContext.Provider value={currUser}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
