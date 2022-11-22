# Exercise 3 - Get a random word

You have been provided with a list of words. _They are supposed to be the most common 4-plus-letter words in English._ Look at `src/data/words.json`.

1. Let's start by importing that into `App.js`. This will give us access to the entire array of `words` in that `json` file.

```js
import words from "../data/words.json";
```

2. Write a function called `getNewWord` inside of `App`. This function should `console.log` a random word from that array. Time to flex those `JS` muscles! 💪.
3. Call that function inside of `handleStart`, effectively tying it to the start button.
4. Once you have that working, you need to save that word in state. Create a new state variable called `word`.
5. The initial state of `word` should be the following `{str: ""}`. _We are making it an object because we are going to need to add more to this `word` in a bit._

```js
const [word, setWord] = useState({ str: "" });
```

6. Modify `getNewWord` to set the state of `word.str` with the random word.
7. Use the React dev tools to validate that a new word is put in state everytime you click on the start button.

![devtools](../__lecture/assets/ex_3.1.gif)

This isn't quite the functionality we want. We need to toggle the "Start" button into a "Pause" button once the game is started, and not change the word, once there is a word in state.

Implement this functionality:

8. Only call `getNewWord` if there is no word in `word.str`.
9. Modify the button label to be dynamic. It should be either "Start", "Pause" or "Continue" depending on the status of the game.
