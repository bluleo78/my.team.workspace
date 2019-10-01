import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginView from './containers/LoginView';
import ChatView from './components/ChatView';
import UserInfoView from './containers/UserInfoView';

function App(props) {
  const { currentUser, userInfo } = props;
  return (
    <>
      {!currentUser ? (<LoginView />) : null}
      {currentUser && !userInfo ? (<ChatView />) : null}
      {currentUser && userInfo ? (<UserInfoView />) : null}
    </>
  );
}

App.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  userInfo: PropTypes.shape({
    name: PropTypes.string,
  }),
};

App.defaultProps = {
  currentUser: null,
  userInfo: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo,
  };
}

export default connect(mapStateToProps)(App);
