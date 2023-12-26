import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h2>Vending Machine</h2>

      <img
        src="https://st2.depositphotos.com/2283523/11549/v/950/depositphotos_115491864-stock-illustration-vending-machine-black-color-isolated.jpg"
        alt="Vending Machine"
        width={500}
      ></img>

      <div>
        <h3>Welcome to the online Vending Machine! What would you like? </h3>
      </div>

      <ul className="VendingMachine-items">
        Snacks in stock:
        <li>
          <Link to="/lays">Lays Chips</Link>
        </li>
        <li>
          {" "}
          <Link to="/kitkat">KitKat Bar</Link>
        </li>
        <li>
          <Link to="/gumExtra">Gum Extra</Link>
        </li>
      </ul>
    </div>
  );
};

export default VendingMachine;
