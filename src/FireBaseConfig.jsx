// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpHZBNPWrnpaaoK7j_-RuYLKEVBZYc_N0",
  authDomain: "proyecto-react-7e387.firebaseapp.com",
  projectId: "proyecto-react-7e387",
  storageBucket: "proyecto-react-7e387.appspot.com",
  messagingSenderId: "79423463999",
  appId: "1:79423463999:web:465e15a9e0c6135c114e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)