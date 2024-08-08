// src/App.js
import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signOutUser } from './services/firebaseAuth.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './services/firebase.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Tasks from './pages/Tasks';
import Home from './pages/Home';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Notion Clone</h1>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/tasks" element={<Tasks />} />
              </Routes>
            </div>
          </Router>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;
