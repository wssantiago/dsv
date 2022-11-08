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

function Stack() {
  const inputButtons = ["add", "top", "pop"];

  const [stack, setStack] = useState([]);
  const [add, setAdd] = useState("");
  const [element, setElement] = useState("");

  function makeInputButton(name) {
    if (name == "add") {
      return (
        <StyledInputButton>
          {makeAddInput()} {handleButtonSwitch(name)}
        </StyledInputButton>
      );
    } else {
      return handleButtonSwitch(name);
    }
  }

  function handleButtonSwitch(name) {
    switch (name) {
      case "add":
        return makeAddButton();
      case "top":
        return makeTopButton();
      case "pop":
        return makePopButton();
    }
  }

  function makeAddInput() {
    return (
      <StyledInput
        placeholder={"Type to add..."}
        onChange={(e) => setAdd(e.target.value)}
        value={add}
      ></StyledInput>
    );
  }

  function makeAddButton() {
    return (
      <StyledButton
        onClick={() => (
          setStack([" " + add + " ", ...stack]), setAdd(""), setElement("")
        )}
      >
        {"add"}
      </StyledButton>
    );
  }

  function makeTopButton() {
    return (
      <StyledButton solo="true" onClick={() => setElement(stack[0])}>
        {"top"}
      </StyledButton>
    );
  }

  function makePopButton() {
    return (
      <StyledButton solo="true" onClick={() => (setStack((stack) => stack.splice(1, stack.length-1)), setElement(""))}>
        {"pop"}
      </StyledButton>
    );
  }

  return (
    <MainContainer>
      {" "}
      <TitleContainer>
        <StyledTitle>selected: Stack</StyledTitle>
      </TitleContainer>
      <DSContainer>
        <StyledArray>{"[" + stack + "]"}</StyledArray>
      </DSContainer>
      <BodyContainer>
        {" "}
        <ElementContainer element={element}>
          {element ? "top = " + stack[0] : ""}
        </ElementContainer>
        <ButtonsContainer>
          {inputButtons.map((name) => makeInputButton(name))}
        </ButtonsContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default Stack;
