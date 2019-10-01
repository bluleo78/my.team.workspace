import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatUserListView from '../components/ChatUserListView';

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
    <ChatUserListView
      currentUser={{ name: 'Tom' }}
      users={[
        { name: 'Mary' },
        { name: 'Tom' },
      ]}
    />
  ));
