# Exercise 2 - The Start Button

Let's turn `BTN 1` into a "Start" button.

You will need to do the following:

1. Change the label of `btn 1` to "Start".
2. Create a function called `handleStart`.
3. In that function, call `setGame` and change the value of `started` to the opposite of what it currently is. (i.e. `!game.started`).
4. Pass that function to the `Button` component.

_Take a look at the Button component file. The component is expecting to receive a `onClickFunc` as props. Pass it the `handleStart` function._

```js
const handleStart = () => {
  setGame({ ...game, started: !game.started });
};
```

```html
<button onClickFunc={handleStart}>Start</button>
```

Once this is wired up, we should be able to toggle the game:

![new game](../__lecture/assets/ex_2.gif)
