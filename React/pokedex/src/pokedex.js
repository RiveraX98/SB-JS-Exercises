import React from "react";
import Card from "./card";
import "./pokedex.css";

const Pokedex = ({ pokemon }) => {
  return (
    <>
      <h1 className="pokedex-title">Pokedex</h1>
      {pokemon.map((p) => (
        <Card
          name={p.name}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
    </>
  );
};

export default Pokedex;
