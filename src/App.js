import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Telman", age: 22 },
      { name: "Adil", age: 23 },
      { name: "Mirze", age: 25 },
    ],
  });

  const [toggleState, setToggleState] = useState({ toggle: true });

  const toggleNameHandler = () => {
    const doShow = toggleState.toggle;
    setToggleState({ toggle: !doShow });
  };

  const onChangedHandler = (event) => {
    setPersonState({
      person: [
        { name: "Telman", age: 37 },
        { name: event.target.value, age: 23 },
        { name: "Karam", age: 25 },
      ],
    });
  };

  const buttonStyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hello, I am a React App</h1>
      <button style={buttonStyle} onClick={toggleNameHandler}>
        Toggle Names
      </button>
      {toggleState.toggle ? (
        <div>
          <Person
            name={personState.person[0].name}
            age={personState.person[0].age}
          />
          <Person
            changed={onChangedHandler}
            name={personState.person[1].name}
            age={personState.person[1].age}
            currName={personState.person[1].name}
          >
            This is a child
          </Person>
          <Person
            name={personState.person[2].name}
            age={personState.person[2].age}
          />
        </div>
      ) : null}
    </div>
  );
};

export default App;
