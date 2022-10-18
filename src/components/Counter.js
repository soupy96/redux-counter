// we can import useSelector which allows us to select a specific point in the store
// using useStore gives us the whole store
// if we're using class based components we can use "connect" which is used as a wrapper around the class component to connect it to the store
// use useDispatch to dispatch actions to our store
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // we pass a function which tells react-redux which piece of data that we want to extract from out store
  // we passed the react-redux state into the function when it gets executed and executes the code on the right which returns what you need from state
  // when we use useSelector it automatically sets up a subscription to the state and updates whenever the state changes, which re-executes the component
  // if we remove this component from the app react-redux would automatically remove the subscription for me
  const counter = useSelector((state) => state.counter);

  // gives us a dispatch function that we can call against our redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
