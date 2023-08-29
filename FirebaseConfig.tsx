// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkQLflRREMSQ5N3WfmX4_D-_FUZTDRv8",
  authDomain: "ecommerce-953b8.firebaseapp.com",
  projectId: "ecommerce-953b8",
  storageBucket: "ecommerce-953b8.appspot.com",
  messagingSenderId: "821210703394",
  appId: "1:821210703394:web:f270860e7b2947c9bbcc7b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB= getFirestore(FIREBASE_APP);