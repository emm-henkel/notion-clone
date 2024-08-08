// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYMEO4BdpUebo-sqJwHWtIyrGfdlAf3LU",
  authDomain: "notion-clone-801bb.firebaseapp.com",
  projectId: "notion-clone-801bb",
  storageBucket: "notion-clone-801bb.appspot.com",
  messagingSenderId: "28350313654",
  appId: "1:28350313654:web:fe8cc507d9ddb83a8f6217",
  measurementId: "G-2DTJ77EWED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;