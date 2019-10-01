/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../contexts';

import './ChatUserListView.css';

class ChatUserListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      selectedUserName, users = [], onSelectUser,
    } = this.props;
    const currentUser = this.context;

    function handleSelectListItem(e) {
      onSelectUser(e.currentTarget.dataset.id);
    }

    const userListItems = users
      .filter((user) => !currentUser || currentUser.name !== user.name)
      .map((user) => {
        const selectedStyle = user.name === selectedUserName
          ? 'user-list-view__item--selected' : null;
        return (
          <li
            key={user.name}
            className={selectedStyle}
            onClick={handleSelectListItem}
            data-id={user.name}
          >
            {user.name}
          </li>
        );
      });

    if (currentUser) {
      const selectedStyle = currentUser.name === selectedUserName
        ? 'user-list-view__item--selected' : null;
      userListItems.splice(0, 0, (
        <li
          key={currentUser.name}
          className={selectedStyle}
          onClick={handleSelectListItem}
          data-id={currentUser.name}
        >
          Me
        </li>
      ));
    }

    return (
      <div>
        <ul className="user-list-view__list">
          {userListItems}
        </ul>
      </div>
    );
  }
}

ChatUserListView.contextType = UserContext;

ChatUserListView.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  selectedUserName: PropTypes.string,
  onSelectUser: PropTypes.func,
};

ChatUserListView.defaultProps = {
  users: [],
  selectedUserName: '',
  onSelectUser: () => null,
};

export default ChatUserListView;
