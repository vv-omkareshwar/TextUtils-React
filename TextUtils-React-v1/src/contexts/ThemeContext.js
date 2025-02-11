import React from 'react';
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglePMode = () => {
    setMode("purple");
    document.body.style.backgroundColor = '#a98eda';
    showAlert("Purple mode has been enabled", "success");
  };

  const toggleLMode = () => {
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  };

  const toggleDMode = () => {
    setMode("dark");
    document.body.style.backgroundColor = '#212529';
    showAlert("Dark mode has been enabled", "success");
  };

  return (
    <ThemeContext.Provider value={{
      mode,
      alert,
      showAlert,
      togglePMode,
      toggleLMode,
      toggleDMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };