import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/about"}>
        <button>about</button>
      </Link>
    </div>
  );
};

export default Home;
