/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './ChatUserListView.css';

class ChatUserListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      currentUser, users, onSelectUser,
    } = this.props;

    function handleSelectListItem(e) {
      onSelectUser(e.currentTarget.dataset.id, users);
    }

    const userListItems = users
      .map((user) => {
        const dispName = currentUser && currentUser.name === user.name ? 'Me' : user.name;
        return (
          <li
            key={user.name}
            onClick={handleSelectListItem}
            data-id={user.name}
          >
            {dispName}
          </li>
        );
      });

    return (
      <div>
        <ul className="user-list-view__list">
          {userListItems}
        </ul>
      </div>
    );
  }
}

ChatUserListView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onSelectUser: PropTypes.func,
};

ChatUserListView.defaultProps = {
  currentUser: null,
  users: [],
  onSelectUser: () => null,
};

export default ChatUserListView;
