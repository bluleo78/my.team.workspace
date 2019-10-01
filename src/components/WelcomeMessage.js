import React from 'react';
import PropTypes from 'prop-types';


function WelcomeMessage({ name, unreadMsgCnt }) {
  return (
    <div>
      <p>{`Welcome, ${name}. You have ${unreadMsgCnt || 0} messages`}</p>
    </div>
  );
}


WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
  unreadMsgCnt: PropTypes.number,
};

WelcomeMessage.defaultProps = {
  unreadMsgCnt: 0,
};

export default WelcomeMessage;
