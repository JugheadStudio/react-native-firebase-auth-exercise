import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDb32s1vJm9gBa1GTgVi6bPXFa9HTQchhQ",
  authDomain: "class-work-c1139.firebaseapp.com",
  projectId: "class-work-c1139",
  storageBucket: "class-work-c1139.appspot.com",
  messagingSenderId: "312804424671",
  appId: "1:312804424671:web:8fe02e633fb9ffd9f1a26a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app)