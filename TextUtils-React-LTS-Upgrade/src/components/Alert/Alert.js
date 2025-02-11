import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ alert }) => {
  const capitalize = (msg) => {
    return msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
  };

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

export default Alert;