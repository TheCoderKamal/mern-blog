

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a1692.firebaseapp.com",
  projectId: "mern-blog-a1692",
  storageBucket: "mern-blog-a1692.appspot.com",
  messagingSenderId: "668316448653",
  appId: "1:668316448653:web:72bf78f1c23593d630afc4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);