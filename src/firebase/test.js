import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { firestore } from './firebase.utils';

const firestore = firebase.firestore();

firestore.collection('users').doc('7iXR0gGbSM99cT8GagaW').collection('cartItems').doc('GhGjrc96kGywkJVLhLeg');
firestore.doc('/users/7iXR0gGbSM99cT8GagaW/cartItems/GhGjrc96kGywkJVLhLeg');
firestore.collection('/users/7iXR0gGbSM99cT8GagaW/cartItems');