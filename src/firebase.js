// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4vkeR3-7zKwm0qIOZozh-50zmikBjlhw",
  authDomain: "nasa-universe-404f5.firebaseapp.com",
  projectId: "nasa-universe-404f5",
  storageBucket: "nasa-universe-404f5.appspot.com",
  messagingSenderId: "355808038679",
  appId: "1:355808038679:web:86220d4fe04276dc6a3152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 