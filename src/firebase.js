// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIei-c2Y1fqqq7zSraFGICgLduReo4HYs",
  authDomain: "netflix-redux-76de8.firebaseapp.com",
  projectId: "netflix-redux-76de8",
  storageBucket: "netflix-redux-76de8.appspot.com",
  messagingSenderId: "835404543315",
  appId: "1:835404543315:web:08629b37bd9270f9029da6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
