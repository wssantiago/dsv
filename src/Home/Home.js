import React from "react";
import {
  MainContainer,
  StyledTitle,
  TitleContainer,
  CardsContainer,
  Card,
  CardImg,
  CardName,
  CardContainer,
} from "../styles.js";

function Home() {
  const structures = ["Array","Queue", "Stack"];
  var slicedStructures = [];

  function groupStructures() {
    slicedStructures = [];
    let left = 0;
    structures.forEach(function (structure, i) {
      if ((i + 1) % 4 == 0 || i == structures.length - 1) {
        slicedStructures.push(structures.slice(left, i + 1));
        left = i + 1;
      }
    });
  }

  function makeCard(name) {
    return (
      <Card href={"/" + name}>
        <CardImg>{name[0]}</CardImg>
        <CardName>{name}</CardName>
      </Card>
    );
  }

  function makeGridCards(arr) {
    return <CardContainer>{arr.map((name) => makeCard(name))}</CardContainer>;
  }

  return (
    <MainContainer>
      <TitleContainer>
        <StyledTitle>Choose the data structure to play with.</StyledTitle>
      </TitleContainer>
      <CardsContainer>
        {groupStructures()}
        {slicedStructures.map((slice) => makeGridCards(slice))}
      </CardsContainer>
    </MainContainer>
  );
}

export default Home;
