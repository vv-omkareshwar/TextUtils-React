import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import Alert from './components/Alert/Alert';
import './App.css';

const App = () => {
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

  const toggleMode = (newMode) => {
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'white' : newMode === 'dark' ? '#212529' : '#a98eda';
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
            element={<About mode={mode} />} 
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