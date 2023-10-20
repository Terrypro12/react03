// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore,addDoc, collection,getDoc,getDoc, query, where, setDoc, deleteDoc,updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAR7VJiXk4dq2kt7hqN-zISHQWOKp71xM",
  authDomain: "proy-react-app03.firebaseapp.com",
  projectId: "proy-react-app03",
  storageBucket: "proy-react-app03.appspot.com",
  messagingSenderId: "211352335630",
  appId: "1:211352335630:web:36b74db7ee49bed6f6935f",
  measurementId: "G-YQEFXH0RR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export const db = getFirestore(App);
const storage = getStorage(App);