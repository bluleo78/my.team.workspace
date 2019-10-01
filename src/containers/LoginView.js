import { connect } from 'react-redux';

import LoginView from '../components/LoginView';
import { setCurrentUser, addUser, addMessage } from '../actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitLogin: (name) => {
      const user = {
        name,
      };

      dispatch(setCurrentUser(user));

      dispatch(addUser(user));

      dispatch(addMessage({
        id: new Date().getTime(),
        type: 'welcome',
        receiver: name,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
