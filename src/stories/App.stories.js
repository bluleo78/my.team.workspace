import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import App from '../App';
import reducer from '../reducers';


storiesOf('App', module)
  .add('default', () => {
    const store = createStore(reducer);

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  .add('shows ChatView after login', () => {
    const store = createStore(reducer, { currentUser: { name: 'Mary' } });

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
