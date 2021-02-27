import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCoc-sm-8K63NwbZqgAf1HrJdXxwZdt6uw',
  authDomain: 'fb-clone-dh.firebaseapp.com',
  projectId: 'fb-clone-dh',
  storageBucket: 'fb-clone-dh.appspot.com',
  messagingSenderId: '840313668531',
  appId: '1:840313668531:web:1988e25ec9e1c96a0481c6',
  measurementId: 'G-7PJMVW4C3R',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
