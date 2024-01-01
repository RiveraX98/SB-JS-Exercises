import React, { useState, useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import { ColorList } from "./ColorsList";
import { v4 as uuid } from "uuid";
import "./ColorFactory.css";

export const ColorFactory = () => {
  const INITIAL_STATE = [
    { name: "red", color: "red", key: 1 },
    { name: "yellow", color: "yellow", key: 2 },
    { name: "blue", color: "blue", key: 3 },
    { name: "green", color: "green", key: 4 },
  ];

  const [colorList, setColorList] = useState(INITIAL_STATE);
  const formData = useActionData();

  useEffect(() => {
    setColorList((colors) => [...colors, { ...formData, key: uuid() }]);
  }, [formData]);

  return (
    <div>
      <div className="ColorFactory-main">
        <h1>Welcome to the Color Factory</h1>
        <Link className="ColorFactory-add" to="/colors/new">
          Add a color
        </Link>
      </div>
      <ColorList colors={colorList} />
    </div>
  );
};
