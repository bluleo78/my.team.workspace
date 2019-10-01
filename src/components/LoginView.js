import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoginView.module.scss';


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
    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <label htmlFor="userNameInput">
            Nick:
            <input
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>Login</button>
        </div>
      </div>
    );
  }
}


LoginView.propTypes = {
  onSubmitLogin: PropTypes.func,
};

LoginView.defaultProps = {
  onSubmitLogin: () => null,
};

export default LoginView;
