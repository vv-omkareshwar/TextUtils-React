import React from 'react';

/**
 * Alert component for displaying messages.
 * @param {Object} props - Component props
 * @param {Object} props.alert - Alert object containing type and message
 * @returns {React.ReactElement|null} - Alert component or null if no alert
 */
const Alert = ({ alert }) => {
  /**
   * Capitalizes the first letter of a string.
   * @param {string} msg - The message to capitalize
   * @returns {string} - Capitalized message
   */
  const capitalize = (msg) => {
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;