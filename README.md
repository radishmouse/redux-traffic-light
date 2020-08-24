## Traffic light

### Create a new React app, and delete the contents of `src/index.js`

Make sure to `npm i redux` or `yarn add redux`.

Optional: create separate files for your redux code.

### Describe the defaultState for a traffic light

It should be able to hold one of three values: `'red'`, `'yellow'`, `'green'`

### Write an action and action creator

You need at least one: `CHANGE`.

(Should you have more? Does a traffic light ever go out of order?)

### Write the reducer

Make sure it returns a copy of state. The new version of state should be based on the existing state.

### Create the store

Try it out on the console, attaching any variables or functions to the `window` object.
