import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = () => {
  const [state, setState] = useState([]);

  const addState = async (url) => {
    const response = await axios.get(url);
    setState((s) => [...s, { ...response.data, id: uuid() }]);
  };
  return [state, addState];
};

export default useAxios;
