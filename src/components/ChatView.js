import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import ChatHistoryView from '../containers/ChatHistoryView';
import ChatUserListView from '../containers/ChatUserListView';
import ChatInputView from '../containers/ChatInputView';

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '90vh',
  },
  body: {
    flexGrow: 1,
    overflow: 'auto',
  },
  leftBody: {
    height: '100%',
  },
  rightBody: {
    height: '100%',
  },
  footer: {
    minHeight: 100,
  },
});

function ChatView(props) {
  const { classes } = props;

  return (
    <Container className={classes.container}>
      <Grid container direction="row" spacing={2} className={classes.body}>
        <Grid item xs={8} className={classes.leftBody}>
          <ChatHistoryView />
        </Grid>
        <Grid item xs={4} className={classes.rightBody}>
          <Paper>
            <ChatUserListView />
          </Paper>
        </Grid>
      </Grid>
      <ChatInputView className={classes.footer} />
    </Container>
  );
}


ChatView.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    leftBody: PropTypes.string,
    rightBody: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(ChatView);
