import React from 'react';
import { storiesOf } from '@storybook/react';

import UserMessage from '../components/UserMessage';

storiesOf('UserMessage', module)
  .add('default', () => <UserMessage name="Mary" text="Hi Everyone!" />)
  .add('smile', () => <UserMessage name="Mary" emotion="smile" />)
  .add('show my message', () => <UserMessage name="Mary" text="Hi Everyone!" isMe />)
  .add('show other user message', () => <UserMessage name="Mary" text="Hi Everyone!" />);
