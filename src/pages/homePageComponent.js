import React from "react";
import { Helmet } from "react-helmet";

const head = () => {
  return (
    <Helmet>
      <title>My Page title</title>
    </Helmet>
  );
};

const Home = () => {
  return (
    <div>
      {head()}
      <h1>Home page</h1>
      <p>Some content</p>
      <button onClick={() => console.log("hello im running")}>
        Click the button
      </button>
    </div>
  );
};

export default Home;
