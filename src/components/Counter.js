// we can import useSelector which allows us to select a specific point in the store
// using useStore gives us the whole store
// if we're using class based components we can use "connect" which is used as a wrapper around the class component to connect it to the store
// use useDispatch to dispatch actions to our store
// import { Component } from 'react';
// import { render } from 'react-dom';
import { useSelector, useDispatch, connect } from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  // we pass a function which tells react-redux which piece of data that we want to extract from out store
  // we passed the react-redux state into the function when it gets executed and executes the code on the right which returns what you need from state
  // when we use useSelector it automatically sets up a subscription to the state and updates whenever the state changes, which re-executes the component
  // if we remove this component from the app react-redux would automatically remove the subscription for me
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  // gives us a dispatch function that we can call against our redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // when we're dispatching actions with slices we need to execute the method and not just point to it
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // when we need to send a payload we pass it through the method
    // we pass an object with any key value pairs of our choice or just a single number
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_INDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           {/* using bind() to make sure that the this keyword refers to the functions in this class */}
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // function that maps the redux state to props that will be received in this class component
// // this is the equivilent to the useSelector Hook
// const mapStateToProps = (state) => {
//   // this returns an object where the keys are available to the class component and the values are the logic for drilling into the redux state
//   // the key is up to you
//   return {
//     counter: state.counter,
//   };
// };

// // this function is the equivilent to useDispatch
// // this stores dispatch functions in props
// // receives the dispatch function as an argument
// const mapDispatchToProps = (dispatch) => {
//   // keys are prop names which we can use in the component
//   // the values are another function where we call dispatch and setup the action
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// connect is a high order component
// it runs connect and returns a new function and executes the returned function as well, and to the returned function we pass Counter
// connects wants to arguments and they both are functions that are pointers
// using connect manages subscriptions to the store
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
