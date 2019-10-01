import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';

import ChatView from '../components/ChatView';
import reducer from '../reducers';

storiesOf('ChatView', module)
  .add('default', () => {
    const store = createStore(reducer, {
      currentUser: { name: 'Mary' },
      users: [
        { name: 'Mary' },
      ],
    });

    return (
      <Provider store={store}>
        <ChatView />
      </Provider>
    );
  })
  .add('shows multiple chats with users', () => {
    const store = createStore(reducer, {
      currentUser: { name: 'Mary' },
      users: [
        { name: 'Tom' },
        { name: 'Paul' },
        { name: 'Mary' },
      ],
      messages: [
        {
          id: 1, type: 'welcome', receiver: 'Mary',
        },
        {
          id: 2, type: 'welcome', receiver: 'Tom',
        },
        {
          id: 3, type: 'user', sender: 'Tom', text: 'Hi',
        },
        {
          id: 4, type: 'user', sender: 'Mary', text: 'Hi Tom',
        },
      ],
    });

    return (
      <Provider store={store}>
        <ChatView />
      </Provider>
    );
  });
