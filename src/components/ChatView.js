import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import ChatHistoryView from '../containers/ChatHistoryView';
import ChatUserListView from '../containers/ChatUserListView';
import ChatInputView from '../containers/ChatInputView';

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    height: '500px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userView: {
    height: '100%',
  },
});

function ChatView(props) {
  const { classes } = props;

  return (
    <Container className={classes.container}>
      <Grid container direction="row" spacing={2} style={{height: '100%', flexGrow: 1}}>
        <Grid item xs={8} style={{height: '100%'}}>
            <ChatHistoryView />
        </Grid>
        <Grid item xs={4} style={{height: '100%'}}>
          <Paper>
            <ChatUserListView />
          </Paper>
        </Grid>
      </Grid>
      <ChatInputView style={{height: 100}} />
    </Container>
  );
}


export default withStyles(styles)(ChatView);
