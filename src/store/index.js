import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// createSlice() needs an object
// creating a slice of our global state that are similar, you can make more than one slice for different things
// every slice needs a name, a specific identifier
// needs an intial state
// add reducers, an object/map, of all the reducers that this state slice needs
// each method needs to take in the state
// in the object we are allowed to mutate the state bccause with redux toolkit we cant accidentally manipulate the existing state
// as well as recieving the state the methods can recieve the action payload. its not required but optional
createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    // you need to return everything in the state cause redux doesnt merge everything in the existing state it replaces it
    // never change/mutate the OG state
    // always copy and create new objects
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
