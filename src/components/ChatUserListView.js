import React from 'react';
import PropTypes from 'prop-types';

function ChatUserListView(props) {
  const { currentUser, users = [] } = props;
  const userListItems = users
    .filter((user) => !currentUser || currentUser.name !== user.name)
    .map((user) => (<p key={user.name}>{user.name}</p>));

  if (currentUser) userListItems.splice(0, 0, (<p key={currentUser.name}>Me</p>));

  return (
    <div>
      {userListItems}
    </div>
  );
}


ChatUserListView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

ChatUserListView.defaultProps = {
  currentUser: null,
  users: [],
};

export default ChatUserListView;
