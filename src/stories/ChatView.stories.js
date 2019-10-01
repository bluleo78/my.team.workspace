import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatView from '../components/ChatView';
import { UserContext } from '../contexts';

storiesOf('ChatView', module)
  .add('default', () => (
    <UserContext.Provider value={{ name: 'Mary' }}>
      <ChatView />
    </UserContext.Provider>
  ))
  .add('shows multiple chats with users', () => (
    <UserContext.Provider value={{ name: 'Mary' }}>
      <ChatView
        users={[
          { name: 'Tom' },
          { name: 'Paul' },
          { name: 'Mary' },
        ]}
        messages={[
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
        ]}
      />
    </UserContext.Provider>
  ));
