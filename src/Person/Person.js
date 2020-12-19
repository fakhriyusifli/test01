import React from "react";

const person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
