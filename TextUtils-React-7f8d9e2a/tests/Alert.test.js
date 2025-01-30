import React from 'react';

const Alert = ({ alert }) => {
  if (!alert) return null;

  const capitalize = (word) => {
    return word && typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : '';
  }

  const type = alert.type || 'info';  // Default to 'info' if type is not provided

  return (
    <div className={`alert alert-${type}`} role="alert">
      <strong>{capitalize(type)}: </strong>{alert.msg}
    </div>
  );
}

export default Alert;