import React from 'react';
import PropTypes from 'prop-types';

import ChatHistoryView from './ChatHistoryView';
import ChatUserListView from './ChatUserListView';
import ChatInputView from './ChatInputView';

import styles from './ChatView.module.scss';


class ChatView extends React.Component {
  handleSelectUser = (text) => {
    const { onSelectUser } = this.props;
    onSelectUser(text);
  };

  render() {
    const {
      users, messages, onSelectUser, onSubmitChatInput,
    } = this.props;

    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <div className={styles.view__body__center}>
            <ChatHistoryView messages={messages} />
          </div>
          <div className={styles.view__body__right}>
            <ChatUserListView
              users={users}
              onSelectUser={onSelectUser}
            />
          </div>
        </div>
        <div className={styles.view__footer}>
          <ChatInputView onSubmitMessage={onSubmitChatInput} />
        </div>
      </div>
    );
  }
}


ChatView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string,
    receiver: PropTypes.string,
    text: PropTypes.string,
  })),
  onSelectUser: PropTypes.func,
  onSubmitChatInput: PropTypes.func,
};

ChatView.defaultProps = {
  currentUser: null,
  users: [],
  messages: [],
  onSelectUser: () => null,
  onSubmitChatInput: () => null,
};

export default ChatView;
