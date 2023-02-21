import React from 'react';
import PropTypes from 'prop-types';
import '../styles/alert.css';

const Alert = ({ message, success }) => {
  let colour;
  if (success) {
    colour = 'green';
  } else {
    colour = 'red';
  }
  if (message) {
    return (
      <div className={`alert-${colour}`}>
        {message}
      </div>
    );
  }

  return null;
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  message: null,
  success: false,
};

export default Alert;
