import React from "react";

const ExerciseOne = () => {
  const onclick = (event: any): void => {
    alert("This is an alert");
  };

  return (
    <>
      <button onClick={onclick}>Open alert</button>
    </>
  );
};
export default ExerciseOne;
