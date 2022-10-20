import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

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
  initialState,
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

// in order to dispatch actions we acces the slice that we created and access the "actions" keyword where all of our reducers that we created are stored
// they all automatically have an unique identifiers per action
// counterSlice.actions.toggleCounter();

// we give createStore the slice that we just created as well as ".reducer to give access to the reducer functions that we created"
// only one slice can be passed into createStore and with multiple slices this can create a problem
// to solve this problem we use configureStore from the reduxjs/toolkit which takes in a object
// the reducer property is expected which you put in your reducer
// if we are using multiple reducers/slices we give the reducer property on object
// they key names are determined by me and the the values are the different slices reducers, an object of all the different slices that I would create as well as their reducers
const store = configureStore({
  reducer: counterSlice.reducer,
});

// we export our counterActions as well as our store
export const counterActions = counterSlice.actions;
export default store;
