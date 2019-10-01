import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import reducer from './reducers';

const store = createStore(reducer, undefined, applyMiddleware(thunkMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
), document.getElementById('root'));
