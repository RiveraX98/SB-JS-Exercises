import React from "react";
import Pokedex from "./pokedex";
import pokemon from "./pokemon";
function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
