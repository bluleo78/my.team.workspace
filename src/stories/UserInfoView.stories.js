import React from 'react';
import { storiesOf } from '@storybook/react';

import UserInfoView from '../components/UserInfoView';
import { UserContext } from '../contexts';

storiesOf('UserInfoView', module)
  .add('default', () => (
    <UserContext.Provider value={{ name: 'Mary' }}>
      <UserInfoView selectedUserName="Mary" />
    </UserContext.Provider>
  ))
  .add('show user but not editable', () => (
    <UserContext.Provider value={{ name: 'Tom' }}>
      <UserInfoView selectedUserName="Mary" />
    </UserContext.Provider>
  ));
