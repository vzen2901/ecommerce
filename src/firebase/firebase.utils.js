import firebase from 'firebase/compat/app';
//cho phép truy cập vào: firestore,auth
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyB_vBEHd4CWLWc3TFtPljcva-T_zEwLYvE",
  authDomain: "crwn-db-3e9eb.firebaseapp.com",
  projectId: "crwn-db-3e9eb",
  storageBucket: "crwn-db-3e9eb.appspot.com",
  messagingSenderId: "314985054888",
  appId: "1:314985054888:web:ef77421242b178ef32b89d",
  measurementId: "G-9PVP3GZ0EL"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
//luôn kích hoạt của sổ bật lên của google khi sử dụng google-auth

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;