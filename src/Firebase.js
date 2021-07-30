import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7pK24k82DznL5_l_my3A74yfvLOaDqUg",
  authDomain: "tinder-clone-565ba.firebaseapp.com",
  projectId: "tinder-clone-565ba",
  storageBucket: "tinder-clone-565ba.appspot.com",
  messagingSenderId: "707019515812",
  appId: "1:707019515812:web:c13290231a6d72a3e80331",
  measurementId: "G-NSVM4NKDHW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
