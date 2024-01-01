import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./Color.css";
export const Color = (props) => {
  const params = useParams();
  let { state } = useLocation();
  return (
    <div style={{ backgroundColor: state.color }}>
      <h1>This is {params.name}</h1>
      <h3>Isn't it Beautiful</h3>
      <Link to="/colors">Go Back</Link>
    </div>
  );
};
