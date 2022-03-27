import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbvOgCPgcm5XqI84RnuSluIwGW3hxdkL8',
  authDomain: 'clothing-db-1da1a.firebaseapp.com',
  projectId: 'clothing-db-1da1a',
  storageBucket: 'clothing-db-1da1a.appspot.com',
  messagingSenderId: '470465986280',
  appId: '1:470465986280:web:c3d4d520e6e14bfe6a535d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(error) {
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
