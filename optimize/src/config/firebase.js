// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyAeO5A72q-P4ecxWamv6CVuVmwVdYxrdb0",
  authDomain: "react-b410e.firebaseapp.com",
  projectId: "react-b410e",
  storageBucket: "react-b410e.firebasestorage.app",
  messagingSenderId: "991356056269",
  appId: "1:991356056269:web:18a26a2dbdd6219530af84",
  measurementId: "G-86GD2GJC0Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const getGoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const LoggedIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const reset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};
