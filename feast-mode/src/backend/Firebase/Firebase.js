import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyA2GpyDPNZxR9u5_iA425p-3XLKrPwjAyA",
  authDomain: "feast-mode.firebaseapp.com",
  databaseURL: "https://feast-mode.firebaseio.com",
  projectId: "feast-mode",
  storageBucket: "feast-mode.appspot.com", // added storage in firebase - AL
  messagingSenderId: "824628144237",
  appId: "1:824628144237:web:e2171ef9638afce7",
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
