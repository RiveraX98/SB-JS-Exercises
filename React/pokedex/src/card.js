import React from "react";
import "./card.css";
const Card = ({ name, img, type, exp }) => {
  return (
    <div className="card">
      <h3 className="card-name">{name}</h3>
      <img src={img} alt="pokemon" />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Card;
