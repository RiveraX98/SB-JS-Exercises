import React from "react";
import { Link } from "react-router-dom";

export const ColorList = ({ colors }) => {
  return (
    <div>
      <p>Please select a color</p>
      <ul>
        {colors.map((color) => (
          <li style={{ listStyle: "none" }} key={color.key}>
            <Link to={`/colors/${color.name}`} state={{ color: color.color }}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
