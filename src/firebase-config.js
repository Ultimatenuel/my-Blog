import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAty4MJUHSCixaqNksWRdsV8Inei_eSBh8",
  authDomain: "blogproject-a893c.firebaseapp.com",
  projectId: "blogproject-a893c",
  storageBucket: "blogproject-a893c.appspot.com",
  messagingSenderId: "245784237147",
  appId: "1:245784237147:web:b2958b38a8caeb08301b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();