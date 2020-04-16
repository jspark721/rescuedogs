import React from "react";

export default function Dog({ name, breed, gender }) {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{breed}</h2>
      <h2>{gender}</h2>
    </div>
  );
}
