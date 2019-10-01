import { connect } from 'react-redux';

import ChatInputView from '../components/ChatInputView';
import { addMessage } from '../actions';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userInfo: state.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitMessage: (name, text) => dispatch(addMessage({
      id: new Date().getTime(),
      type: 'user',
      sender: name,
      text,
    })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputView);
