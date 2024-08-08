// src/App.js
import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signOutUser } from './firebaseAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';

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
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default App;
