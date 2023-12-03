// import './App.css';

import React from "react";
import EightBall from "./eightball";
import answers from "./answers";

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
