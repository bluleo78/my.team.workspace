import React from 'react';
import PropTypes from 'prop-types';


function UserMessage({ name, text, emotion }) {
  return (
    <div>
      {text ? (<p>{`${name} says "${text}"`}</p>) : null}
      {emotion ? (<p>{`${name} feels (${text})`}</p>) : null}
    </div>
  );
}


UserMessage.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  emotion: PropTypes.string,
};

UserMessage.defaultProps = {
  text: null,
  emotion: null,
};

export default UserMessage;
