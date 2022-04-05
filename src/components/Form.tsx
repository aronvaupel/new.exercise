import React, { useEffect, useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const greetings = () => {
    alert(`Greetings ${firstName} ${lastName}`);
  };
  return (
    <form onSubmit={greetings}>
      <input
        type="text"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        onChange={(event) => setLastName(event.target.value)}
      />
      <button type="submit">Greet Me!</button>
    </form>
  );
};

export default Form;
