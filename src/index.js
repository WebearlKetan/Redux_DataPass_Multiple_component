// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  // Render the main App component with Redux store provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

