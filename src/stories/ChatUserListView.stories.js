import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatUserListView from '../components/ChatUserListView';
import { UserContext } from '../contexts';

storiesOf('ChatUserListView', module)
  .add('default', () => <ChatUserListView />);

storiesOf('ChatUserListView', module)
  .add('shows users', () => (
    <ChatUserListView users={[
      { name: 'Mary' },
      { name: 'Tom' },
    ]}
    />
  ))
  .add('show users including me', () => (
    <UserContext.Provider value={{ name: 'Tom' }}>
      <ChatUserListView
        users={[
          { name: 'Mary' },
          { name: 'Tom' },
        ]}
      />
    </UserContext.Provider>
  ))
  .add('show users with selected user', () => (
    <UserContext.Provider value={{ name: 'Tom' }}>
      <ChatUserListView
        users={[
          { name: 'Mary' },
          { name: 'Tom' },
        ]}
        selectedUserName="Mary"
      />
    </UserContext.Provider>
  ))
  .add('show users with selected me', () => (
    <UserContext.Provider value={{ name: 'Tom' }}>
      <ChatUserListView
        users={[
          { name: 'Mary' },
          { name: 'Tom' },
        ]}
        selectedUserName="Tom"
      />
    </UserContext.Provider>
  ));
