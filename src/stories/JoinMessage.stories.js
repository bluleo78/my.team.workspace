import React from 'react';
import { storiesOf } from '@storybook/react';

import JoinMessage from '../components/JoinMessage';

storiesOf('JoinMessage', module)
  .add('default', () => <JoinMessage name="Mary" />);
