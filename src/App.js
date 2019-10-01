import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginView from './containers/LoginView';
import ChatView from './components/ChatView';
import UserInfoView from './containers/UserInfoView';
import { fetchNewMessage, addUser } from './actions';


class App extends React.Component {
  componentDidMount() {
    const { fetchNewMessageFromServer, prepareRobot } = this.props;

    prepareRobot();

    setInterval(() => fetchNewMessageFromServer(), 5000);
  }


  render() {
    const { currentUser, userInfo } = this.props;
    return (
      <>
        {!currentUser ? (<LoginView />) : null}
        {currentUser && !userInfo ? (<ChatView />) : null}
        {currentUser && userInfo ? (<UserInfoView />) : null}
      </>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  userInfo: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchNewMessageFromServer: PropTypes.func,
  prepareRobot: PropTypes.func,
};

App.defaultProps = {
  currentUser: null,
  userInfo: null,
  fetchNewMessageFromServer: () => null,
  prepareRobot: () => null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    fetchNewMessageFromServer: () => dispatch(fetchNewMessage()),
    prepareRobot: () => dispatch(addUser({ name: 'Robot' })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
