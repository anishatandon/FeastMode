import firebase from 'firebase/app';
import 'firebase/firestore'
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

// class Firebase {
//   constructor() {
//     firebase.initializeApp(config); // initialize the app

//     this.auth = firebase.auth();
//     this.db = firebase.database();
//     this.storage = firebase.storage();
//   }

//   // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email =>
//     this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);

//   doEmailUpdate = email =>
//     this.auth.currentUser.updateEmail(email);

//   doProfileUpdate = dictionary =>
//     this.auth.currentUser.updateProfile(dictionary);

//   doDeleteUser = () =>
//     this.auth.delete()

//   user = uid => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   userID = () => this.auth.currentUser
// }


//   firebase.initializeApp(config);
//   export const provider = new firebase.auth.GoogleAuthProvider();
//   export const auth = firebase.auth();

// export const storage = Firebase.storage;

firebase.initializeApp(config)
firebase.firestore()

export default firebase;
