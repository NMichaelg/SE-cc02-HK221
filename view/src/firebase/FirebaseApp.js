// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNfmdKzc4vyPYSc3FYHvom3LHgZRRkW6k",
  authDomain: "se-cc02.firebaseapp.com",
  projectId: "se-cc02",
  storageBucket: "se-cc02.appspot.com",
  messagingSenderId: "107683823119",
  appId: "1:107683823119:web:6f269539572054b7532d7a",
  measurementId: "G-G8K8088TPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);