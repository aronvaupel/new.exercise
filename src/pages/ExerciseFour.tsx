import React, { useState } from "react";

const ExerciseFour = () => {
  const list: string[] = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <div>
      {list.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </div>
  );
};

export default ExerciseFour;
