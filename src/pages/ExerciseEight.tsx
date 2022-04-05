import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Punchline from "../components/Punchline";
import User from "../components/user";
import { UserProps } from "../components/user";

const ExerciseSeven = () => {
  const [dataSet, setDataSet] = useState<[]>([]);

  async function getData(): Promise<void> {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const result = await response.json();
      setDataSet(result);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {dataSet.length &&
        dataSet.map((e: UserProps) => (
          <User
            first_name={e.first_name}
            last_name={e.last_name}
            username={e.username}
            key={e.username}
          />
        ))}
    </div>
  );
};

export default ExerciseSeven;
