import React, { useState } from "react";
import ListItem from "../components/ListItem";

const ExerciseFive = () => {
  const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div>
      <h2>List Items</h2>
      {list.map((e) => (
        <ListItem value={e} />
      ))}
    </div>
  );
};

export default ExerciseFive;
