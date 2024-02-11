import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let currVal = window.localStorage.getItem(key) || defaultVal;
    return currVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
