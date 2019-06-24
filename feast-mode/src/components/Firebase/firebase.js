import app from 'firebase/app';
import firebase from 'firebase'
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyA2GpyDPNZxR9u5_iA425p-3XLKrPwjAyA",
    authDomain: "feast-mode.firebaseapp.com",
    databaseURL: "https://feast-mode.firebaseio.com",
    projectId: "feast-mode",
    storageBucket: "",
    messagingSenderId: "824628144237",
    appId: "1:824628144237:web:e2171ef9638afce7",
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default Firebase;
