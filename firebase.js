// import firebase from 'firebase/compat/app';
// import { getFirestore } from "firebase/firestore";

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDA4YrHevmZizAGFihYx9kqVUaRpR9J__Y",
    authDomain: "twitter-clone-37e4f.firebaseapp.com",
    projectId: "twitter-clone-37e4f",
    storageBucket: "twitter-clone-37e4f.appspot.com",
    messagingSenderId: "868166482550",
    appId: "1:868166482550:web:be0d5dc6f37c72840f7d57",
    measurementId: "G-F3GR4JELL4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);

// export default db;