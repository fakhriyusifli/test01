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

  const [toggleState, setToggleState] = useState({ toggle: false });

  // TOGGLE PERSONS HANDLER
  const toggleNameHandler = () => {
    const doShow = toggleState.toggle;
    setToggleState({ toggle: !doShow });
  };

  // DELETE PERSON HANDLERE
  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    console.log(persons);
    setPersonState({ persons: persons });
  };

  // CHANGE HANDLER
  const changedHandler = (event, id) => {
    console.log(id);
    const personIndex = personState.persons.findIndex((p) => {
      return p.id === id;
    });
    console.log(personIndex);

    const person = { ...personState.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({ persons: persons });
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
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
              name={person.name}
              age={person.age}
              changed={(e) => changedHandler(e, person.id)}
              key={person.id}
              click={() => deletePersonHandler(index)}
            />
          );
        })}
      </div>
    );
    buttonStyle.backgroundColor = "red";
  }

  // Dynamic styling
  const classes = [];
  if (personState.persons.length <= 2) {
    classes.push("red");
  }
  if (personState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hello, I am a React App</h1>
      <p className={classes.join(" ")}>This is really working beaaatch!</p>
      <button style={buttonStyle} onClick={toggleNameHandler}>
        Toggle Names
      </button>
      {persons}
    </div>
  );
};

export default App;
