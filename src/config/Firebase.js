
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAG6sugVu6ko3BYngeu5wcxg58H9J-81UQ",
  authDomain: "tiktok-clone---react.firebaseapp.com",
  projectId: "tiktok-clone---react",
  storageBucket: "tiktok-clone---react.appspot.com",
  messagingSenderId: "583801212235",
  appId: "1:583801212235:web:1164fdeba55c637ae32cce"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;