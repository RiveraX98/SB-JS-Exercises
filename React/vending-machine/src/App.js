import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Lays from "./Lays";
import Gum from "./Gum";
import KitKat from "./KitKat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/lays" element={<Lays />} />
          <Route path="/kitkat" element={<KitKat />} />
          <Route path="/gumExtra" element={<Gum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
