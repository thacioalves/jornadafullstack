
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDvF3zzknikX7YBOMjCJqJcvV7gfZ4Ad7A",
  authDomain: "tiktok-thacio-f17a2.firebaseapp.com",
  projectId: "tiktok-thacio-f17a2",
  storageBucket: "tiktok-thacio-f17a2.appspot.com",
  messagingSenderId: "749307172315",
  appId: "1:749307172315:web:c6d889db09d37065ab83fe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;