// src/firebaseAuth.js
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth };

// Function to handle Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info.
    const user = result.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

// Function to handle sign-out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
