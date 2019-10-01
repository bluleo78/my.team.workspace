import { connect } from 'react-redux';

import UserInfoView from '../components/UserInfoView';
import { setCurrentUser, hideUserInfo, modifyUser } from '../actions';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitChangeUserInfo: (userInfo, origUserName) => {
      dispatch(setCurrentUser(userInfo));
      dispatch(modifyUser(origUserName, userInfo));
      dispatch(hideUserInfo());
    },
    onGoBack: () => {
      dispatch(hideUserInfo());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoView);
