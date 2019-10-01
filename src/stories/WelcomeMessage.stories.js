import React from 'react';
import { storiesOf } from '@storybook/react';

import WelcomeMessage from '../components/WelcomeMessage';

storiesOf('WelcomeMessage', module)
  .add('default', () => <WelcomeMessage name="Mary" unreadMsgCnt={0} />);

storiesOf('WelcomeMessage', module)
  .add('shows welcome message with unread messages', () => <WelcomeMessage name="Mary" unreadMsgCnt={1} />);
