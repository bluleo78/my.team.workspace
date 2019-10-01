import React from 'react';
import PropTypes from 'prop-types';

import WelcomeMessage from './WelcomeMessage';
import UserMessage from './UserMessage';
import JoinMessage from './JoinMessage';

import styles from './ChatHistoryView.module.scss';
import { UserContext } from '../contexts';


class ChatHistoryView extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const { messages } = this.props;
    const currentUser = this.context;

    const messageList = messages.map((msg) => {
      if (msg.type === 'welcome') {
        if (currentUser && msg.receiver === currentUser.name) {
          return (<WelcomeMessage key={msg.id} name={currentUser.name} unreadMsgCnt={0} />);
        }

        return (<JoinMessage key={msg.id} name={msg.receiver} />);
      }

      return (<UserMessage key={msg.id} name={msg.sender} text={msg.text} emotion={msg.emotion} />);
    });
    messageList.reverse();

    return (
      <div className={styles.view}>
        {messageList}
        <div ref={this.messagesEndRef} />
      </div>
    );
  }
}

ChatHistoryView.contextType = UserContext;

ChatHistoryView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string,
    receiver: PropTypes.string,
    text: PropTypes.string,
  })),
};

ChatHistoryView.defaultProps = {
  messages: [],
};

export default ChatHistoryView;
