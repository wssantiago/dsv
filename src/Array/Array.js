import React, { useState } from "react";
import {
  MainContainer,
  TitleContainer,
  StyledTitle,
  DSContainer,
  StyledArray,
  ButtonsContainer,
  ElementContainer,
  BodyContainer,
  StyledInputButton,
  StyledInput,
  StyledButton,
} from "../styles.js";

function Array() {
  const buttons = ["append", "remove", "get"];

  const [arr, setArr] = useState([]);
  const [append, setAppend] = useState("");
  const [remove, setRemove] = useState("");
  const [getIndex, setGetIndex] = useState("");
  const [element, setElement] = useState("");

  function makeInputButton(name) {
    return (
      <StyledInputButton>
        {handleInputSwitch(name)} {handleButtonSwitch(name)}
      </StyledInputButton>
    );
  }

  function handleInputSwitch(name) {
	switch (name) {
      case "append":
        return makeAppendInput();
      case "remove":
        return makeRemoveInput();
      case "get":
        return makeGetInput();
    }
  }

  function handleButtonSwitch(name) {
    switch (name) {
      case "append":
        return makeAppendButton();
      case "remove":
        return makeRemoveButton();
      case "get":
        return makeGetButton();
    }
  }

  function makeAppendInput() {
    return (
      <StyledInput
        placeholder={"Type to append..."}
        onChange={(e) => setAppend(e.target.value)}
        value={append}
      ></StyledInput>
    );
  }

  function makeAppendButton() {
    return (
      <StyledButton
        onClick={() => (
          setArr([...arr, " " + append + " "]), setAppend(""), setElement("")
        )}
      >
        {"append"}
      </StyledButton>
    );
  }

  function makeRemoveInput() {
    return (
      <StyledInput
        placeholder={"Type index to remove..."}
        onChange={(e) => setRemove(e.target.value)}
        value={remove}
      ></StyledInput>
    );
  }

  function makeRemoveButton() {
    return (
      <StyledButton
        onClick={() => (
          setArr((arr) => arr.filter((val, i) => i !== parseInt(remove))),
          setRemove(""),
          setElement("")
        )}
      >
        {"remove"}
      </StyledButton>
    );
  }

  function makeGetInput() {
    return (
      <StyledInput
        placeholder={"Type index to get..."}
        onChange={(e) => setGetIndex(e.target.value)}
        value={getIndex}
      ></StyledInput>
    );
  }

  function makeGetButton() {
    return (
      <StyledButton
        onClick={() => (setElement(arr[getIndex]), setGetIndex(""))}
      >
        {"get"}
      </StyledButton>
    );
  }

  console.log(append);
  console.log(remove);
  console.log(getIndex);
  return (
    <MainContainer>
      {" "}
      <TitleContainer>
        <StyledTitle>selected: Array</StyledTitle>
      </TitleContainer>
      <DSContainer>
        <StyledArray>{"[" + arr + "]"}</StyledArray>
      </DSContainer>
      <BodyContainer>
        {" "}
        <ElementContainer element={element}>
          {element ? "array[" + arr.indexOf(element) + "] = " + element : ""}
        </ElementContainer>
        <ButtonsContainer>
          {buttons.map((name) => makeInputButton(name))}
        </ButtonsContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default Array;
