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

  const [anotherState, setAnotherState] = useState("Another State");

  console.log(personState, anotherState);

  const switchNameHandler = () => {
    // console.log("Clicked!");
    // DO NOT DO THIS => this.state.person[0].name = 'Shahin';
    setPersonState({
      person: [
        { name: "Akshin", age: 37 },
        { name: "Zaman", age: 23 },
        { name: "Karam", age: 25 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello, I am a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        This is a child
      </Person>
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      />
    </div>
  );
};

export default App;
