import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange=(e) => {
    this.setState({ name: e.target.value });
  }


  handleClickButton=() => {
    const { onSubmitLogin } = this.props;
    const { name } = this.state;
    if (onSubmitLogin) {
      onSubmitLogin(name);
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xs" className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User ID"
            name="userId"
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClickButton}
          >
            Sign In
          </Button>
        </form>
      </Container>
    );
  }
}


LoginView.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    avatar: PropTypes.string,
    form: PropTypes.string,
    submit: PropTypes.string,
  }).isRequired,
  onSubmitLogin: PropTypes.func,
};

LoginView.defaultProps = {
  onSubmitLogin: () => null,
};

export default withStyles(styles)(LoginView);
