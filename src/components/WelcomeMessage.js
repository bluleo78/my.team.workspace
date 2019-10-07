import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';


function WelcomeMessage({ name, unreadMsgCnt }) {
  const message = `Welcome, ${name}. You have ${unreadMsgCnt || 0} messages`;
  return (
    <Grid container direction="column" spacing={1} alignItems="center">
      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          label={message}
        />
      </Grid>
    </Grid>
  );
}


WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
  unreadMsgCnt: PropTypes.number,
};

WelcomeMessage.defaultProps = {
  unreadMsgCnt: 0,
};

export default WelcomeMessage;
