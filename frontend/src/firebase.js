// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-c9d34.firebaseapp.com",
    projectId: "mern-auth-c9d34",
    storageBucket: "mern-auth-c9d34.firebasestorage.app",
    messagingSenderId: "752337833602",
    appId: "1:752337833602:web:eb4c54b1b84a5023766e9b",
    measurementId: "G-ZS7EYB67Y8"
};

// Initialize Firebase
export const app = initializeApp( firebaseConfig );