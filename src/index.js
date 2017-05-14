import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './components/Root';
import searchApp from './reducers';

import './index.css';

let store = createStore(searchApp, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
