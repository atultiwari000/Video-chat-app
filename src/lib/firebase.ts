import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyBfuhyE6N7zU61B6KKnCgXbyVodcpBIm40",
  authDomain: "screen-sharing-app-40065.firebaseapp.com",
  databaseURL: "https://screen-sharing-app-40065-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "screen-sharing-app-40065",
  storageBucket: "screen-sharing-app-40065.firebasestorage.app",
  messagingSenderId: "458764722624",
  appId: "1:458764722624:web:ca121f3b1aa701f3e12825",
  measurementId: "G-P8WZHYYPQW"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

