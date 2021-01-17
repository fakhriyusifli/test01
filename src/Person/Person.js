import React from "react";
import styled from "styled-components";
// import "./Person.css";

const StyledDiv = styled.div`
  width: 40%;
  margin: 2% auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <h1 onClick={props.click}>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
