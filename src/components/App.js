import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import GameOverModal from "./GameOverModal";
import { useState } from "react";
import words from "../data/words.json";

import { colors, contentWidth } from "./GlobalStyles";

const initialGameState = { started: false, over: false, win: false };

const App = () => {
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "" });
  const [wrongGuesses, setWrongGuesses] = useState([]);  // pass this array to the DeadLetters.js
  const [usedLetters, setUsedLetters] = useState(["v", "t"]);

  const handleStart = () => {
    setGame({ ...game, started: !game.started });  // call setGame and change the value of started to the opposite of what it currently is. (i.e. !game.started)
    if (word.str === "") {
      getNewWord();
    }
  };

  const getNewWord = () => {  // this function should console.log a random word from that array
    const randomWord = words[Math.floor(Math.random() * words.length)];
  //  console.log(randomWord);
  let revealed = [];  // the revealed value is an array that contains an empty string for each letter in the word (see TheWord.js)
  for (let i=0; i < randomWord.length; i++) {
    revealed.push("")
  }
  setWord({ str: randomWord, revealed: revealed });
  }

  const changeLabel = () => {
    let statusOfTheGame = "";

    if( game.started === true) {
      statusOfTheGame = "Pause";
    } else if (word.str.length >= 1){
      statusOfTheGame = "Continue";
    } else {
      statusOfTheGame = "Start";
    }
    return statusOfTheGame;
  }

  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>{ changeLabel() }</Button>
        <Button>btn 2</Button>
      </Nav>
      {game.started && (   // make use of game.started to conditionally render the content of the page
      <>
        <Container>
          <Deadman />
          <RightColumn>
            <DeadLetters wrongGuesses = {wrongGuesses}/>
            <TheWord word = {word}/>
          </RightColumn>
        </Container>
        <Keyboard usedLetters = {usedLetters}/>
      </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
