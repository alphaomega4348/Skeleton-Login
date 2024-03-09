// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-7d48e.firebaseapp.com",
  projectId: "auth-7d48e",
  storageBucket: "auth-7d48e.appspot.com",
  messagingSenderId: "385155917079",
  appId: "1:385155917079:web:05e7de476db32f3f8d8352"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);