import React from 'react';
import PropTypes from 'prop-types';

import ChatHistoryView from './ChatHistoryView';
import ChatUserListView from './ChatUserListView';
import ChatInputView from './ChatInputView';

import styles from './ChatView.module.scss';


class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: props.userName },
      users: [],
      messages: [],
      ...props.initialState,
    };
  }

  handleSubmitChatInput = (text) => {
    this.setState((state) => ({
      messages: [...state.messages, {
        id: new Date().getTime(),
        type: 'user',
        sender: state.currentUser.name,
        text,
      }],
    }));
  };

  render() {
    const { currentUser, users, messages } = this.state;

    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <div className={styles.view__body__center}>
            <ChatHistoryView currentUser={currentUser} messages={messages} />
          </div>
          <div className={styles.view__body__right}>
            <ChatUserListView currentUser={currentUser} users={users} />
          </div>
        </div>
        <div className={styles.view__footer}>
          <ChatInputView onSubmitMessage={this.handleSubmitChatInput} />
        </div>
      </div>
    );
  }
}


ChatView.propTypes = {
  userName: PropTypes.string.isRequired,
  initialState: PropTypes.shape({
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
  }),
};

ChatView.defaultProps = {
  initialState: {},
};

export default ChatView;
