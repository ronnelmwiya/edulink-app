import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"; // Import the function

const firebaseConfig = {
  apiKey: "AIzaSyBqXu6f_kwIrDF9eYL9mxKre9gyqOnnV3w",
  authDomain: "edulink-7ca72.firebaseapp.com",
  projectId: "edulink-7ca72",
  storageBucket: "edulink-7ca72.appspot.com",
  messagingSenderId: "867197956340",
  appId: "1:867197956340:web:183aaea8fc6d094e772ea1",
  measurementId: "G-YBRV3FEVYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, serverTimestamp, addDoc, collection, googleProvider, doc, setDoc, getDoc };