import { useState } from "react";

const useFlip = (initial = true) => {
  const [state, setState] = useState(initial);

  const toggleState = () => {
    setState((state) => !state);
  };

  return [state, toggleState];
};

export default useFlip;
