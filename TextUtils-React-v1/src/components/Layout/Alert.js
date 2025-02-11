import React from 'react';
import PropTypes from 'prop-types';

function Alert({ alert }) {
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
}

Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        msg: PropTypes.string.isRequired,
    }),
};

export default Alert;