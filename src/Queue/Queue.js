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

function Queue() {
  const inputButtons = ["enqueue", "dequeue", "front"];

  const [queue, setQueue] = useState([]);
  const [enqueue, setEnqueue] = useState("");
  const [element, setElement] = useState("");

  function makeInputButton(name) {
		if(name == 'enqueue') {
			return (
				<StyledInputButton>
					{handleInputSwitch(name)} {handleButtonSwitch(name)}
				</StyledInputButton>
			);
		} else {
			return handleButtonSwitch(name);
		}

  }

  function handleInputSwitch(name) {
    switch (name) {
      case "enqueue":
        return makeEnqueueInput();
    }
  }

  function handleButtonSwitch(name) {
    switch (name) {
      case "enqueue":
        return makeEnqueueButton();
      case "dequeue":
        return makeDequeueButton();
      case "front":
        return makeFrontButton();
    }
  }

  function makeEnqueueInput() {
    return (
      <StyledInput
        placeholder={"Type to enqueue..."}
        onChange={(e) => setEnqueue(e.target.value)}
        value={enqueue}
      ></StyledInput>
    );
  }

  function makeEnqueueButton() {
    return (
      <StyledButton
        onClick={() => (
          setQueue([...queue, " " + enqueue + " "]),
          setEnqueue(""),
          setElement("")
        )}
      >
        {"enqueue"}
      </StyledButton>
    );
  }

  function makeDequeueButton() {
    return (
      <StyledButton
        solo="true"
        onClick={() => (
          setQueue((queue) => queue.splice(1, queue.length - 1)), setElement("")
        )}
      >
        {"dequeue"}
      </StyledButton>
    );
  }

  function makeFrontButton() {
    return (
      <StyledButton solo='true' onClick={() => setElement(queue[0])}>
        {"front"}
      </StyledButton>
    );
  }

  return (
    <MainContainer>
      {" "}
      <TitleContainer>
        <StyledTitle>selected: Queue</StyledTitle>
      </TitleContainer>
      <DSContainer>
        <StyledArray>{"[" + queue + "]"}</StyledArray>
      </DSContainer>
      <BodyContainer>
        {" "}
        <ElementContainer element={element}>
          {element ? "front = " + queue[0] : ""}
        </ElementContainer>
        <ButtonsContainer>
          {inputButtons.map((name) => makeInputButton(name))}
        </ButtonsContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default Queue;
