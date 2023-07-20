// import React from 'react';
import Navbar from './com/Navbar';
import Textform from './com/Textform';
import Alert from './com/Alert';
import React, { useState } from 'react';


export default function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <div >
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Alert alert={alert} />
      </div>
      <Textform showAlert={showAlert} heading='Enter The Text To Analyze' mode={mode} />
    </div>
  );
}
