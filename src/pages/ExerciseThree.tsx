import React, { useState } from "react";

const ExerciseThree = () => {
  const [count, setCount] = useState<number>(0);
  const onclick = (event: any): void => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={onclick}>Click to increase!</button>
      <div>{count}</div>
    </div>
  );
};

export default ExerciseThree;
