import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = (newMode) => {
    setMode(newMode);
    let backgroundColor;
    let alertMessage;

    switch (newMode) {
      case 'purple':
        backgroundColor = '#a98eda';
        alertMessage = 'Purple mode has been enabled';
        break;
      case 'dark':
        backgroundColor = '#212529';
        alertMessage = 'Dark mode has been enabled';
        break;
      default:
        backgroundColor = 'white';
        alertMessage = 'Light mode has been enabled';
        newMode = 'light';
    }

    document.body.style.backgroundColor = backgroundColor;
    showAlert(alertMessage, 'success');
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route exact path="/TextUtils-React">
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces and Many more.."
                mode={mode}
                toggleMode={toggleMode}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;