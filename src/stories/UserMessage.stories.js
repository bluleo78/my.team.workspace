import React from 'react';
import { storiesOf } from '@storybook/react';

import UserMessage from '../components/UserMessage';

storiesOf('UserMessage', module)
  .add('default', () => <UserMessage name="Mary" text="Hi Everyone!" />);
