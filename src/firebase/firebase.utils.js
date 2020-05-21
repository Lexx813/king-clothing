import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyAFoorPAWpkd5BgaSt_g7Q62RFgobOmycs',
   authDomain: 'king-clothing-6cdfd.firebaseapp.com',
   databaseURL: 'https://king-clothing-6cdfd.firebaseio.com',
   projectId: 'king-clothing-6cdfd',
   storageBucket: 'king-clothing-6cdfd.appspot.com',
   messagingSenderId: '433635031035',
   appId: '1:433635031035:web:3467f6311294aac97bbd5e',
   measurementId: 'G-SPH69NME0G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
