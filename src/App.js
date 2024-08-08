import logo from './logo.svg';
// src/App.js
import React from 'react';
import app from './firebase'; // Import your firebase setup

function App() {
  console.log('Firebase App Initialized:', app);
  return <div className="App">Your App Content</div>;
}

export default App;