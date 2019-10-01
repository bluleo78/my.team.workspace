import React from 'react';
import { storiesOf } from '@storybook/react';

import UserInfoView from '../components/UserInfoView';

storiesOf('UserInfoView', module)
  .add('default', () => (
    <UserInfoView currentUser={{ name: 'Mary' }} userInfo={{ name: 'Mary' }} initialState={{ isNameChanged: true }} />
  ))
  .add('show user but not editable', () => (
    <UserInfoView currentUser={{ name: 'Tom' }} userInfo={{ name: 'Mary' }} />
  ));
