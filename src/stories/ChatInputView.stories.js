import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatInputView from '../components/ChatInputView';

storiesOf('ChatInputView', module)
  .add('default', () => <ChatInputView />);

storiesOf('ChatInputView', module)
  .add('shows input text', () => <ChatInputView initialState={{ text: 'Hello' }} />);
