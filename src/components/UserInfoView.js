import React from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../contexts';

import styles from './LoginView.module.scss';


class UserInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChangeName=(e) => {
    this.setState({ name: e.target.value });
  }


  handleClickButton=() => {
    const { onChangeUser, selectedUserName } = this.props;
    const { name } = this.state;
    const currentUser = this.context;

    onChangeUser(currentUser.name === selectedUserName ? name : null);
  }


  render() {
    const { selectedUserName } = this.props;
    const { name } = this.state;
    const currentUser = this.context;

    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <label htmlFor="userNameInput">
            Name:
            <input
              type="text"
              value={name || selectedUserName}
              onChange={this.handleChangeName}
              disabled={currentUser.name === selectedUserName ? null : 'disabled'}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>{`${currentUser.name === selectedUserName ? 'Edit' : 'Ok'}`}</button>
        </div>
      </div>
    );
  }
}

UserInfoView.contextType = UserContext;

UserInfoView.propTypes = {
  selectedUserName: PropTypes.string.isRequired,
  onChangeUser: PropTypes.func,
};

UserInfoView.defaultProps = {
  onChangeUser: () => null,
};

export default UserInfoView;
