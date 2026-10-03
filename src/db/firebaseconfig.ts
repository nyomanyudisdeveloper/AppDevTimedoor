// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYIitTTwNzsBfQ_wouwdGNlL6GV8UXwLU",
  authDomain: "mylist---timedoor.firebaseapp.com",
  projectId: "mylist---timedoor",
  storageBucket: "mylist---timedoor.firebasestorage.app",
  messagingSenderId: "835128636004",
  appId: "1:835128636004:web:392a89cfa89671da2e6571",
  measurementId: "G-MWY8CWB2YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
