import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
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
    <Router>
      <Navbar 
        title="TextUtils" 
        mode={mode} 
        toggleDMode={toggleDMode} 
        toggleLMode={toggleLMode} 
        togglePMode={togglePMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route 
            path="/about" 
            element={
              <About 
                mode={mode} 
                toggleDMode={toggleDMode} 
                toggleLMode={toggleLMode} 
                togglePMode={togglePMode}
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
                toggleDMode={toggleDMode} 
                toggleLMode={toggleLMode} 
                togglePMode={togglePMode}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;