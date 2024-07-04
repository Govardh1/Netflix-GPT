// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Make sure to import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLL1wsomUNRSLiLcuUd3PgAqiCSmO6OM",
  authDomain: "netflix-gpt-ab701.firebaseapp.com",
  projectId: "netflix-gpt-ab701",
  storageBucket: "netflix-gpt-ab701.appspot.com",
  messagingSenderId: "558023267758",
  appId: "1:558023267758:web:3b97bb8bfd22907a95e43f",
  measurementId: "G-8TETPMPBDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth

export { auth };
