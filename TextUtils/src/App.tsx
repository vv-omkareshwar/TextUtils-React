// src/types/index.ts

export type Mode = 'light' | 'dark' | 'purple';

export interface NavbarProps {
  title: string;
  mode: Mode;
  toggleDMode: () => void;
  toggleLMode: () => void;
  togglePMode: () => void;
}

// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Mode } from './types';

interface AlertState {
  msg: string;
  type: string;
}

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('light');
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

  const togglePMode = (): void => {
    setMode("purple");
    document.body.style.backgroundColor = '#a98eda';
    showAlert("Purple mode has been enabled", "success");
  };

  const toggleLMode = (): void => {
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  };

  const toggleDMode = (): void => {
    setMode("dark");
    document.body.style.backgroundColor = '#212529';
    showAlert("Dark mode has been enabled", "success");
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleDMode={toggleDMode} toggleLMode={toggleLMode} togglePMode={togglePMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/TextUtils-React">
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces and Many more.."
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;