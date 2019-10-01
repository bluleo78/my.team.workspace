import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserInfoView.module.scss';


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
    const { currentUser, userInfo } = this.props;
    const { name, isNameChanged } = this.state;
    const btnDisplayName = isNameChanged ? 'Submit' : 'Back';
    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <label htmlFor="userNameInput">
            Name:
            <input
              type="text"
              value={name || userInfo.name}
              onChange={this.handleChangeName}
              disabled={currentUser.name === userInfo.name ? null : 'disabled'}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>{btnDisplayName}</button>
        </div>
      </div>
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
};

UserInfoView.defaultProps = {
  currentUser: null,
  onSubmitChangeUserInfo: () => null,
  onGoBack: () => null,
  initialState: {},
};

export default UserInfoView;
