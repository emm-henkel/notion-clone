// src/App.js
import React from 'react';
import { signInWithGoogle, signOutUser } from './firebaseAuth'; // Import your authentication functions

function App() {
  return (
    <div className="App">
      <h1>Notion Clone</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
}

export default App;
