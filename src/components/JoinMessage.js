import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';


function JoinMessage({ name }) {
  const message = `${name} has joined`;
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


JoinMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default JoinMessage;
