// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByRjyuI3FUsAbq5PQ0ATPTtfA8Dj6HFrY",
  authDomain: "twitter-clone-404.firebaseapp.com",
  projectId: "twitter-clone-404",
  storageBucket: "twitter-clone-404.appspot.com",
  messagingSenderId: "714627787222",
  appId: "1:714627787222:web:86a802f92405c752fddc77",
  measurementId: "G-EQ2Z1EGPK1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
