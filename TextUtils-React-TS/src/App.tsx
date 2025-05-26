import React, { useState } from 'react';
import './styles/App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

interface AlertState {
  msg: string;
  type: string;
}

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark' | 'purple'>('light');
  const [alert, setAlert] = useState<AlertState | null>(null);

  const showAlert = (message: string, type: string): void => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (newMode: 'light' | 'dark' | 'purple'): void => {
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'white' : 
                                          newMode === 'dark' ? '#212529' : '#a98eda';
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
  };

  return (
    <Router>
      <Navbar 
        aboutText='About'
        title="TextUtils" 
        mode={mode} 
        toggleLMode={() => toggleMode('light')}
        toggleDMode={() => toggleMode('dark')}
        togglePMode={() => toggleMode('purple')}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={
            <TextForm 
              showAlert={showAlert}  
              heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces and Many more.." 
              mode={mode} 
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;