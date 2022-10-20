import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// createSlice() needs an object
// creating a slice of our global state that are similar, you can make more than one slice for different things
// every slice needs a name, a specific identifier
// needs an intial state
// add reducers, an object/map, of all the reducers that this state slice needs
// each method needs to take in the state
// in the object we are allowed to mutate the state bccause with redux toolkit we cant accidentally manipulate the existing state
// as well as recieving the state the methods can recieve the action payload. its not required but optional
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // when we need to access the data that we are passing through as a payload we need to access the payload property
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// we export our counterActions as well as our store
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
