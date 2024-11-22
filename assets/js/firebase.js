
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCeiJKNJP-QWtvHKA0EcJ3A_hE856iRmc",
  authDomain: "election-poll-app.firebaseapp.com",
  projectId: "election-poll-app",
  storageBucket: "election-poll-app.firebasestorage.app",
  messagingSenderId: "494264563714",
  appId: "1:494264563714:web:e5e35383295107dbea0f1b",
  measurementId: "G-E28LKFB24F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);