import React from 'react';
import Navbar from './com/Navbar';
import Textform from './com/Textform';
import react, { useState } from 'react';


export default function App() {
  const [mode, setMode] = useState('light');
const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Textform heading='Enter The Text To Analyze'  mode={mode} />
    </div>
  );
}
