import React from 'react';

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height: '50px'}}>
      {props.alert && (
        <div className={`bg-${props.alert.type}-100 border border-${props.alert.type}-400 text-${props.alert.type}-700 px-4 py-3 rounded relative`} role="alert">
          <strong className="font-bold">{capitalize(props.alert.type)}</strong>
          <span className="block sm:inline"> {props.alert.msg}</span>
        </div>
      )}
    </div>
  )
}

export default Alert;