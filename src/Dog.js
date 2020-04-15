import React from "react";

export default function Dog({ name, breed, gender }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, breed),
    React.createElement("h2", {}, gender),
  ]);
}
