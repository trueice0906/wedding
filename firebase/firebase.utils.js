import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "yeongli-wedding.appspot.com",
    messagingSenderId: "593767019305",
    appId: "1:593767019305:web:8f6c96666696536398fd38"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;