import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.currName} />
    </div>
  );
};

export default person;
