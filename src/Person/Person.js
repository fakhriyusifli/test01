import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };

  return (
    <div className="Person" style={style}>
      <h1 onClick={props.click}>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
