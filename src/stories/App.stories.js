import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../App';

storiesOf('App', module)
  .add('default', () => <App />);

storiesOf('App', module)
  .add('shows ChatView after login', () => <App initialState={{ userName: 'Mary' }} />);
