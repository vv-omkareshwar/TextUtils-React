import React from 'react';

interface AlertProps {
  alert: {
    type: string;
    msg: string;
  } | null;
}

const Alert: React.FC<AlertProps> = ({ alert }) => {
  const capitalize = (msg: string): string => {
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
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

export default Alert;