import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import logoImage from '../images/logo192.png';

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
});

class UserInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', isNameChanged: false, ...props.initialState };
  }


  componentDidMount = () => {
    const { userInfo } = this.props;
    this.setState({ name: userInfo.name });
  }


  handleChangeName=(e) => {
    this.setState({ name: e.target.value, isNameChanged: true });
  }


  handleClickButton=() => {
    const {
      currentUser, userInfo, onSubmitChangeUserInfo, onGoBack,
    } = this.props;
    const { name, isNameChanged } = this.state;

    if (isNameChanged) {
      onSubmitChangeUserInfo({
        ...currentUser, name,
      }, userInfo.name);
    } else {
      onGoBack();
    }
  }


  render() {
    const { currentUser, userInfo, classes } = this.props;
    const { name, isNameChanged } = this.state;
    const btnDisplayName = isNameChanged ? 'Submit' : 'Back';
    return (
      <Container maxWidth="xs" className={classes.container}>
        <form className={classes.form} noValidate>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={logoImage}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" disabled>
                Edit
              </Button>
            </CardActions>
          </Card>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Name"
            label="Name"
            name="Name"
            autoFocus
            value={name || userInfo.name}
            onChange={this.handleChangeName}
            disabled={currentUser.name === userInfo.name}
          />
          <Button variant="contained" color="primary" onClick={this.handleClickButton}>{btnDisplayName}</Button>
        </form>
      </Container>
    );
  }
}

UserInfoView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  userInfo: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onSubmitChangeUserInfo: PropTypes.func,
  onGoBack: PropTypes.func,
  initialState: PropTypes.shape({
    name: PropTypes.string,
    isNameChanged: PropTypes.bool,
  }),
  classes: PropTypes.shape({
    container: PropTypes.string,
    form: PropTypes.string,
  }).isRequired,
};

UserInfoView.defaultProps = {
  currentUser: null,
  onSubmitChangeUserInfo: () => null,
  onGoBack: () => null,
  initialState: {},
};

export default withStyles(styles)(UserInfoView);
