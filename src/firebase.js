//import * as firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWOwFRL8QT8zYkUVzCtkB2SXXRwhnbjXo",
  authDomain: "challenge-dab9c.firebaseapp.com",
  projectId: "challenge-dab9c",
  storageBucket: "challenge-dab9c.appspot.com",
  messagingSenderId: "1088386252700",
  appId: "1:1088386252700:web:5c6517d2c5df6d4c58d259",
  measurementId: "G-BS0H6M2S07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };