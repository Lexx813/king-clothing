import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
/////////////////////////////////////////
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const batch = writeBatch(db);
//   const collectionRef = collection(db, collectionKey);

//   objectsToAdd.forEach(object => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };
/////////////////////////////////////////
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

///////////////////////////////////////
export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};
//////////////////////
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
///////////////////
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
/////////////////////
export const signOutUser = async () => await signOut(auth);
////////////////
export const onAuthStateChangedListener = cb => onAuthStateChanged(auth, cb);
