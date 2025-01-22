import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Main App component
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  /**
   * Show an alert message
   * @param {string} message - The alert message
   * @param {string} type - The type of alert
   */
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  /**
   * Toggle mode
   * @param {string} newMode - The new mode to set
   * @param {string} color - The background color for the new mode
   */
  const toggleMode = (newMode, color) => {
    setMode(newMode);
    document.body.style.backgroundColor = color;
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, 'success');
  };

  return (
    <Router>
      <Navbar 
        title="TextUtils" 
        mode={mode} 
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route 
            path="/about" 
            element={
              <About 
                mode={mode} 
              />
            } 
          />
          <Route 
            path="/TextUtils-React" 
            element={
              <TextForm 
                showAlert={showAlert}  
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces and Many more.." 
                mode={mode} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;