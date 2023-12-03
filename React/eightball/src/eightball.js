import React, { useState } from "react";
import "./eightball.css";

const EightBall = ({ answers }) => {
  const genRandom = () =>
    answers[Math.floor(Math.random() * answers.length) + 1];

  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black",
  });

  return (
    <div className="EightBall">
      <h1>Magic EightBall</h1>
      <div
        style={{ backgroundColor: answer.color }}
        className="EightBall-ball"
        onClick={() => setAnswer(genRandom())}
      >
        <h2 className="EightBall-answer">{answer.msg}</h2>
      </div>
    </div>
  );
};

export default EightBall;
