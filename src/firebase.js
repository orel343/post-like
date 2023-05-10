// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8HJoDGMTdz_sy8NmxFZyfQcd8Ybyn20",
  authDomain: "chat-app-clone-2f58c.firebaseapp.com",
  databaseURL: "https://chat-app-clone-2f58c-default-rtdb.firebaseio.com",
  projectId: "chat-app-clone-2f58c",
  storageBucket: "chat-app-clone-2f58c.appspot.com",
  messagingSenderId: "871985505026",
  appId: "1:871985505026:web:ab8cc145a28090d8df981b",
  measurementId: "G-P1S9WTR5ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
