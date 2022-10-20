import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

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
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
