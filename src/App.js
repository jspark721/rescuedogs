import React from "react";
import 'babel-polyfill';
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="logo">Rescue Dogs</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id"/>
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
