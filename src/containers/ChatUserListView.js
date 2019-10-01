import { connect } from 'react-redux';

import ChatUserListView from '../components/ChatUserListView';
import { showUserInfo } from '../actions';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectUser: (name, users) => {
      const selectedUserInfo = users.find((user) => user.name === name);
      return dispatch(showUserInfo(selectedUserInfo));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatUserListView);
