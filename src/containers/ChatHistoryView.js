import { connect } from 'react-redux';
import ChatHistoryView from '../components/ChatHistoryView';


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
  };
}

export default connect(mapStateToProps)(ChatHistoryView);
