import React from "react";
import Button from "../components/button";

const ExerciseTwo = () => {
  const onclick = (event: any): void => {
    alert("This is an alert");
  };

  return (
    <>
      <Button variant={"1"} />
      <Button variant={"2"} />
      <Button variant={"3"} />
    </>
  );
};
export default ExerciseTwo;
