import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatHistoryView from '../components/ChatHistoryView';

storiesOf('ChatHistoryView', module)
  .add('default', () => <ChatHistoryView />);

storiesOf('ChatHistoryView', module)
  .add('show user message', () => (
    <ChatHistoryView
      messages={[{
        id: 1, type: 'user', sender: 'Mary', text: 'Hahah',
      }]}
    />
  ))
  .add('shows join message', () => (
    <ChatHistoryView
      messages={[{ id: 1, type: 'welcome', receiver: 'Mary' }]}
    />
  ))
  .add('shows welcome message', () => (
    <ChatHistoryView
      currentUser={{ name: 'Mary' }}
      messages={[{ id: 1, type: 'welcome', receiver: 'Mary' }]}
    />
  ))
  .add('shows welcome/join/user messages', () => (
    <ChatHistoryView
      currentUser={{ name: 'Mary' }}
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
  ))
  .add('shows enough chats off the view', () => (
    <div style={{ width: 300, height: 200, outlineStyle: 'solid' }}>
      <ChatHistoryView
        currentUser={{ name: 'Mary' }}
        messages={[
          {
            id: 1, type: 'user', sender: 'Tom', text: 'Scroll 1',
          },
          {
            id: 2, type: 'user', sender: 'Tom', text: 'Scroll 2',
          },
          {
            id: 3, type: 'user', sender: 'Tom', text: 'Scroll 3',
          },
          {
            id: 4, type: 'user', sender: 'Mary', text: 'Scroll 4',
          },
          {
            id: 5, type: 'user', sender: 'Mary', text: 'Scroll 5',
          },
          {
            id: 6, type: 'user', sender: 'Mary', text: 'Scroll 6',
          },
          {
            id: 7, type: 'user', sender: 'Mary', text: 'Scroll 7',
          },
          {
            id: 8, type: 'user', sender: 'Mary', text: 'Scroll 8',
          },
          {
            id: 9, type: 'user', sender: 'Mary', text: 'Scroll 9',
          },
        ]}
      />
    </div>
  ))
  .add('shows a message in the view', () => (
    <div style={{ width: 300, height: 200, outlineStyle: 'solid' }}>
      <ChatHistoryView
        currentUser={{ name: 'Mary' }}
        messages={[
          {
            id: 1, type: 'user', sender: 'Tom', text: 'Scroll',
          },
        ]}
      />
    </div>
  ));
