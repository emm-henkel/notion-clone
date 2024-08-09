// src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { auth, signInWithGoogle, signOutUser } from '../services/firebaseAuth';
import { onAuthStateChanged } from "firebase/auth";
import '../styles/navigation.css'; // Import the CSS file

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="link">🥒</a>
      </div>
      <div className="authSection">
        {user ? (
          <>
            <img src={user.photoURL} alt="User Icon" className="userIcon" />
            <button className="button" onClick={signOutUser}>Log Out</button>
          </>
        ) : (
          <button className="button" onClick={signInWithGoogle}>Log In</button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
