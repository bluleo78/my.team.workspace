import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginView from '../components/LoginView';

storiesOf('LoginView', module)
  .add('default', () => <LoginView />);
