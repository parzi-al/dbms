// utils/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU6_zmOiELrNk6cslh9YGN6HYDZJwdwNU",
  authDomain: "jaba-823e8.firebaseapp.com",
  projectId: "jaba-823e8",
  storageBucket: "jaba-823e8.appspot.com",
  messagingSenderId: "467831669120",
  appId: "1:467831669120:web:dc818989acc2e285c24165",
  measurementId: "G-NXYMWNK1R0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, facebookProvider, githubProvider, db };