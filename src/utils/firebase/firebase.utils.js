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
node  query,
  getDocs,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// ADD COLLECTIONS TO FIREBASE ONCE
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd,
//   field
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach(object => {
//     const docRef = doc(collectionRef, object.userName.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };

// GET CATEGORY COLLECTIONS
// export const deleteCategoriesAndDocuments = async () => {
//   const blogtoDeleteRef = collection(db, "blogs");
//   // const q = query(collectionRef);
//   await updateDoc(blogtoDeleteRef, {
//     hats: deleteField(),
//   });

// const querySnapshot = await getDocs(q);
// return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
// };
// deleteCategoriesAndDocuments();
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};
// GET BLOG COLLECTIONS
export const getBlogsAndDocuments = async () => {
  const collectionRef = collection(db, "blogs");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

// CREATE USER AND ADD IT TO FIREBASE USER COLLECTION
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot;
};
////// AUTH
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
///////////////////////////////////
