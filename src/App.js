import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: "erg215re1g", name: "Telman", age: 22 },
      { id: "62rg62gr62", name: "Adil", age: 23 },
      { id: "9uk9u4kuk9", name: "Mirze", age: 25 },
    ],
  });

  const [toggleState, setToggleState] = useState({ toggle: true });

  const toggleNameHandler = () => {
    const doShow = toggleState.toggle;
    setToggleState({ toggle: !doShow });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons });
  };

  const buttonStyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;

  if (toggleState.toggle) {
    persons = (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={deletePersonHandler}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello, I am a React App</h1>
      <button style={buttonStyle} onClick={toggleNameHandler}>
        Toggle Names
      </button>
      {persons}
    </div>
  );
};

export default App;
