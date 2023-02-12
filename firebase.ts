import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCatmbJb-f41-z6jpNrRTYXVxEEybTlqtQ",
  authDomain: "chatgpt-messenger-b24a4.firebaseapp.com",
  projectId: "chatgpt-messenger-b24a4",
  storageBucket: "chatgpt-messenger-b24a4.appspot.com",
  messagingSenderId: "484111678852",
  appId: "1:484111678852:web:cd373643d362eb31ae31d1",
  measurementId: "G-70L2SKSLDT"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };