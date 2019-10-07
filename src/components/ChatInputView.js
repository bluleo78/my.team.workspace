import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    height: '100%',
  },
});

class ChatInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', emotion: null, ...props.initialState };
  }


  handleChangeInput=(e) => {
    this.setState({ text: e.target.value });
  }


  handleClickEnterButton=() => {
    const { currentUser, onSubmitMessage } = this.props;
    const { text, emotion } = this.state;
    this.setState({ text: '' });
    onSubmitMessage(currentUser.name, text, emotion);
  }


  render() {
    const { classes } = this.props;
    const { text } = this.state;

    return (
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs>
          <TextField
            variant="outlined"
            type="text"
            fullWidth
            value={text}
            onChange={this.handleChangeInput}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClickEnterButton}
            className={classes.button}
          >
            Enter
          </Button>
        </Grid>
      </Grid>
    );
  }
}


ChatInputView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  initialState: PropTypes.shape({
    text: PropTypes.string,
    emotion: PropTypes.string,
  }),
  onSubmitMessage: PropTypes.func,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
};

ChatInputView.defaultProps = {
  currentUser: {},
  initialState: {},
  onSubmitMessage: () => null,
};

export default withStyles(styles)(ChatInputView);
