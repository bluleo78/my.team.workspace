import React from 'react';
import PropTypes from 'prop-types';

import LoginView from './components/LoginView';
import ChatView from './components/ChatView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      ...props.initialState,
    };
  }

  handleSubmitLogin = (userName) => {
    this.setState({ userName });
  };

  render() {
    const { userName } = this.state;
    return (
      <>
        {!userName ? (<LoginView onSubmitLogin={this.handleSubmitLogin} />) : null}
        {userName ? (<ChatView userName={userName} />) : null}
      </>
    );
  }
}


App.propTypes = {
  initialState: PropTypes.shape({
    userName: PropTypes.string,
  }),
};

App.defaultProps = {
  initialState: {},
};

export default App;
