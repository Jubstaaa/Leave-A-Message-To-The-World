import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH_QCmsFT3dmRQdKseGIrDyZdEA2w5h_E",
  authDomain: "react-blog-app-ca9e4.firebaseapp.com",
  databaseURL:
    "https://react-blog-app-ca9e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-blog-app-ca9e4",
  storageBucket: "react-blog-app-ca9e4.appspot.com",
  messagingSenderId: "388204454511",
  appId: "1:388204454511:web:f5e4e26f2ca69b6e08a39a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
