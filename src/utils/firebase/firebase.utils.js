import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFoorPAWpkd5BgaSt_g7Q62RFgobOmycs",
  authDomain: "king-clothing-6cdfd.firebaseapp.com",
  databaseURL: "https://king-clothing-6cdfd.firebaseio.com",
  projectId: "king-clothing-6cdfd",
  storageBucket: "king-clothing-6cdfd.appspot.com",
  messagingSenderId: "433635031035",
  appId: "1:433635031035:web:98caf5e90e0997987bbd5e",
  measurementId: "G-NDC6XZBZBJ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};
