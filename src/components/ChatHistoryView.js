import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import WelcomeMessage from './WelcomeMessage';
import UserMessage from './UserMessage';
import JoinMessage from './JoinMessage';


const styles = (theme) => ({
  container: {
    height: '100%',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    padding: theme.spacing(2, 2),
  },
});

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
    const { currentUser, messages, classes } = this.props;
    const messageList = messages.map((msg) => {
      if (msg.type === 'welcome') {
        if (currentUser && msg.receiver === currentUser.name) {
          return (
            <Grid item key={msg.id}>
              <WelcomeMessage name={currentUser.name} unreadMsgCnt={0} />
            </Grid>
          );
        }

        return (
          <Grid item key={msg.id}>
            <JoinMessage name={msg.receiver} />
          </Grid>
        );
      }

      const isMe = currentUser && msg.sender === currentUser.name;
      return (
        <Grid item key={msg.id}>
          <UserMessage name={msg.sender} text={msg.text} emotion={msg.emotion} isMe={isMe} />
        </Grid>
      );
    });
    messageList.reverse();

    return (
      <Grid container direction="column-reverse" spacing={1} className={classes.container}>
        {messageList}
        <Grid ref={this.messagesEndRef} />
      </Grid>
    );
  }
}

ChatHistoryView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    sender: PropTypes.string,
    receiver: PropTypes.string,
    text: PropTypes.string,
  })),
  classes: PropTypes.shape({
    container: PropTypes.string,
  }),
};

ChatHistoryView.defaultProps = {
  currentUser: null,
  messages: [],
  classes: {},
};

export default withStyles(styles)(ChatHistoryView);
