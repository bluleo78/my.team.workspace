import React from 'react';
import PropTypes from 'prop-types';


function JoinMessage({ name }) {
  return (
    <div>
      <p>{`${name} has joined`}</p>
    </div>
  );
}


JoinMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default JoinMessage;
