import React, { useState } from "react";
import Form from "../components/Form";
import Punchline from "../components/Punchline";

const ExerciseSeven = () => {
  const dataSets = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div>
      {dataSets.map((e) => (
        <Punchline setup={e.setup} punchline={e.punchline} />
      ))}
    </div>
  );
};

export default ExerciseSeven;
