import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  appId: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
    db, 
    auth,
    usersCollection,
    songsCollection,
    storage,
    commentsCollection
};