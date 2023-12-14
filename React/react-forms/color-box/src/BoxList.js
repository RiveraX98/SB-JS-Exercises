import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (toRemove) => {
    setBoxes(boxes.filter((box) => box.id !== toRemove));
  };
  return (
    <div>
      <h1>Box Maker</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, width, height, color }) => (
          <Box
            removeBox={removeBox}
            id={id}
            width={width}
            height={height}
            color={color}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
