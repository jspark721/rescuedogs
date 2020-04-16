import React from "react";
import { render } from "react-dom";
import Dog from "./Dog";

const App = () => {
  // return React.createElement(
  //   "div",
  //   { id: "navbar" },
  //   //whatever children of the div you want to pass in
  //   [
  //     React.createElement("h1", {}, "Rescue Dogs"),
  //     React.createElement(Dog, {
  //       name: "Harvey",
  //       breed: "Shih Tzu",
  //       gender: "Male",
  //     }),
  //     React.createElement(Dog, {
  //       name: "Mochi",
  //       breed: "Maltese",
  //       gender: "Female",
  //     }),
  //     React.createElement(Dog, {
  //       name: "Rusty",
  //       breed: "Toy Poodle",
  //       gender: "Male",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1 id="logo">Rescue Dogs</h1>
      <Dog name="Harvey" breed="Shih Tzu" gender="Male" />
      <Dog name="Mochi" breed="Maltese" gender="Female" />
      <Dog name="Rusty" breed="Toy Poodle" gender="Male" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
