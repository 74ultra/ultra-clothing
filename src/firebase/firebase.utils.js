import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_0jr1qGIXTIAO13TrX71ZC5hFAMia8N4",
    authDomain: "ultra-db-6e536.firebaseapp.com",
    databaseURL: "https://ultra-db-6e536.firebaseio.com",
    projectId: "ultra-db-6e536",
    storageBucket: "ultra-db-6e536.appspot.com",
    messagingSenderId: "552424905325",
    appId: "1:552424905325:web:4302e3ab0def0d607c3d64"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

