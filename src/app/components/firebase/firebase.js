// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDocs,
    serverTimestamp,
    updateDoc,
    doc,
    setDoc,
    getDoc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCp1am9xtv6MtSUyUqVErlTP67MdKhgJiw",
  authDomain: "solace-2025.firebaseapp.com",
  projectId: "solace-2025",
  storageBucket: "solace-2025.firebasestorage.app",
  messagingSenderId: "1018879592544",
  appId: "1:1018879592544:web:67b1b5b02c13e9482b1b05",
  measurementId: "G-XEW9MHZ4X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics on the client side
let analytics = null
if (typeof window !== "undefined") {
  // Import analytics dynamically to avoid server-side issues
  import("firebase/analytics")
    .then(({ getAnalytics }) => {
      analytics = getAnalytics(app)
    })
    .catch((error) => {
      console.error("Analytics failed to load:", error)
    })
}

const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

export { auth, db, serverTimestamp, addDocs, collection, googleProvider, doc, setDoc, getDoc, analytics }