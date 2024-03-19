// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsn2UEyhN0xGz9X1COCHkYf5B5rHvbdA0",
  authDomain: "react-contact-33bdc.firebaseapp.com",
  projectId: "react-contact-33bdc",
  storageBucket: "react-contact-33bdc.appspot.com",
  messagingSenderId: "738028021985",
  appId: "1:738028021985:web:38e5e66bbfdfc39629afa0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);