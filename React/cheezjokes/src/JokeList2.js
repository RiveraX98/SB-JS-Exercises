import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

const JokeList = ({ numJokesToGet = 5 }) => {
  const [isLoading, toggleLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  useEffect(
    function () {
      async function getJokes() {
        let j = [...jokes];
        let seenJokes = new Set();
        try {
          while (j.length < numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com", {
              headers: { Accept: "application/json" },
            });
            let { ...jokeObj } = res.data;

            if (!seenJokes.has(jokeObj.id)) {
              seenJokes.add(jokeObj.id);
              j.push({ ...jokeObj, votes: 0 });
            } else {
              console.error("duplicate found!");
            }
          }
          setJokes(j);
          toggleLoading(false);
        } catch (err) {
          console.error(err);
        }
      }

      if (jokes.length === 0) getJokes();
    },
    [jokes, numJokesToGet]
  );

  function generateNewJokes() {
    toggleLoading({ isLoading: true });
    setJokes([]);
  }

  function vote(id, delta) {
    setJokes((allJokes) =>
      allJokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map((j) => (
        <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
      ))}
    </div>
  );
};

export default JokeList;
