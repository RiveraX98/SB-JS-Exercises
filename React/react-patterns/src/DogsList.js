import React from "react";
import { Link } from "react-router-dom";

const DogsList = () => {
  return (
    <div>
      <h1>Dog Adoption Center</h1>
      <h2>Avalible Dogs</h2>
      <ul>
        <li>
          <Link to="/dogs/Joker">Joker</Link>
        </li>
        <li>
          <Link to="/dogs/Kurama">Kurama</Link>
        </li>
        <li>
          <Link to="/dogs/Dante">Dante</Link>
        </li>
        <li>
          <Link to="/dogs/Dante">Duke</Link>
        </li>
      </ul>
    </div>
  );
};

export default DogsList;
