// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgLENXkCfksYeIT2gm6naGejRlYu4iy00",
  authDomain: "mvpsplit-edb99.firebaseapp.com",
  projectId: "mvpsplit-edb99",
  storageBucket: "mvpsplit-edb99.appspot.com",
  messagingSenderId: "478434387239",
  appId: "1:478434387239:web:1150e2c59cfca08cc17502",
  measurementId: "G-VFD5T25S58"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
