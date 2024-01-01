import { Color } from "./Color";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { ColorFactory } from "./ColorFactory";
import { ColorForm, colorAction } from "./ColorForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/colors" element={<ColorFactory />} action={colorAction} />
        <Route path="/colors/:name" element={<Color />} />
        <Route path="/colors/new" element={<ColorForm />} />
        <Route path="*" element={<Navigate to="/colors" />} />
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
