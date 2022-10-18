import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // this provides the store to the whole app at the most top level
  // with this we can access store in each component and child component
  // they can become a subscriber to the store and dispatch actions to the store
  <Provider store={store}>
    <App />
  </Provider>
);
