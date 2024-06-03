// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfBUAslA1OVhFF_i-G5xRNimxEV6CnWGk",
  authDomain: "netflixgpt-63eac.firebaseapp.com",
  projectId: "netflixgpt-63eac",
  storageBucket: "netflixgpt-63eac.appspot.com",
  messagingSenderId: "376493194717",
  appId: "1:376493194717:web:266cfe8163e71836fb0a34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
