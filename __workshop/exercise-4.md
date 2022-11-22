# Exercise 4 - Render the Word

Now that the app can randomly pick a word and add it to state, let's make `<TheWord />` part of the app generate the proper number of `___` based on the number of letters.

We will also need this functionality to track letters that are revealed and put them instead of a `___`.

To do this, create another key/value pair in the `word` object at the same time as you get a new word. The word object should look something like this.

```js
{
  str: "bacon",
  revealed: ["", "", "", "", ""],
}
```

The `revealed` value should an array that contains an empty string for each letter in the word. Later, we will replace these empty strings with letters as the user makes correct guesses.

Once you have done this, pass the `<TheWord>` the word and render either a line or the letter in each position in `revealed`.

_Note that the CSS is already done and might provide some hints as to the functionality._

Try using the React dev tools to change the value of state in the `revealed` array. IT should update in the UI as well. (_see gif below._)

![exercise 4](../__lecture/assets/ex_4.gif)
