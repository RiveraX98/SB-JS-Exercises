import DogsList from "./DogsList";
import { Dog, GetDog } from "./Dog";

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<DogsList />} />
        <Route
          path="/dogs/:name"
          element={<Dog />}
          loader={({ params }) => {
            return GetDog(params.name);
          }}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
