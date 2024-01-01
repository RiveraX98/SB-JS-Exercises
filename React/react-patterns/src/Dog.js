import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import DogInfo from "./DogInfo";

export const Dog = () => {
  const params = useParams();
  const dogInfo = useLoaderData();

  return (
    <div>
      <h2>{params.name}</h2>
      <h3>Breed: {dogInfo.breed}</h3>
      <h4>Age: {dogInfo.age}</h4>
      <ul>
        {dogInfo.facts.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export const GetDog = (dogName) => {
  for (let dog of DogInfo.dogs) {
    if (dog.name === dogName) {
      return dog;
    }
  }
  return null;
};
