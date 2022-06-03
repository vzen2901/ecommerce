import firebase from 'firebase/compat/app';
//cho phép truy cập vào: firestore,auth
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB_vBEHd4CWLWc3TFtPljcva-T_zEwLYvE",
  authDomain: "crwn-db-3e9eb.firebaseapp.com",
  projectId: "crwn-db-3e9eb",
  storageBucket: "crwn-db-3e9eb.appspot.com",
  messagingSenderId: "314985054888",
  appId: "1:314985054888:web:ef77421242b178ef32b89d",
  measurementId: "G-9PVP3GZ0EL"
};
// lấy dữ liệu đăng nhập xác thực => tạo dữ liệu data
export const createUserProfileDocument = async (urerAuth, additionalData) => {
  if(!urerAuth) return;
  
  const userRef = firestore.doc(`users/${urerAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = urerAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;