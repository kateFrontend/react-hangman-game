# Exercise 7 - `usedLetters`

We need a place to store all of the guesses (right and wrong). We will use this to determine whether a key is `disabled` or not in the keyboard.

Create a new state for `usedLetters` in `App.js`. Its initial state should be an empty array. _Although you can add a few letters in there to test your component(s)._

Pass that to the `Keyboard` component. You will need that array to set individual keys to `disabled` in the UI.

In the following screenshot, I edited the initial array to indicate the both `t` and `v` were used.

```js
const [usedLetters, setUsedLetters] = useState(["v", "t"]);
```

![exercise 7](../__lecture/assets/ex_7.png)

Once you have tested this functionality, you can clear that array.
