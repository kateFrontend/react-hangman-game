# Exercise 10 - Ending the game

At the moment, the game continues forever. We need to end the game after 10 wrong guesses. Write a function called `handleEndGame` that accepts a `win` argument (boolean) and set `game.over` to true and `game.win` to either `true` or `false`.

```js
const handleEndGame = (win) => {
  setGame(/* add some code here */);
  alert(`Game Over! You ${win ? "win" : "lose"}`);
};
```

This function will not do much on its own. We need to call it during the guess validation. Call it if

- the user has made 10 wrong guesses `handleEndGame(false)`.
- the user has discovered the word `handleEndGame(true)`.
