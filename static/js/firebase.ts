// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr6orVb_ljzS4oPHBxKWi6nmirfruk79E",
  authDomain: "money-laundry.firebaseapp.com",
  projectId: "money-laundry",
  storageBucket: "money-laundry.appspot.com",
  messagingSenderId: "173373586038",
  appId: "1:173373586038:web:fe37ad5e8669899a72bd57",
  measurementId: "G-MQ51WC3HYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);