import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyA4DIBVpCp5mZpYmBD6bP_lrCmrOzvhlyM",
  authDomain: "crwn-db-d3aa0.firebaseapp.com",
  databaseURL: "https://crwn-db-d3aa0.firebaseio.com",
  projectId: "crwn-db-d3aa0",
  storageBucket: "crwn-db-d3aa0.appspot.com",
  messagingSenderId: "173860210992",
  appId: "1:173860210992:web:12736d4ba19dfffcc960f5",
  measurementId: "G-H0TH533EKJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;