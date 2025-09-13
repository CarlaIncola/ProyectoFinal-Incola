// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9S5-n8BeohtBuxm9z5zFXVeOr9hufW4A",
    authDomain: "booklibrary-c91c0.firebaseapp.com",
    databaseURL: "https://booklibrary-c91c0-default-rtdb.firebaseio.com",
    projectId: "booklibrary-c91c0",
    storageBucket: "booklibrary-c91c0.firebasestorage.app",
    messagingSenderId: "307085047265",
    appId: "1:307085047265:web:273487fa4fc56b0b2a0ea0",
    measurementId: "G-9XYCBKFYLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);