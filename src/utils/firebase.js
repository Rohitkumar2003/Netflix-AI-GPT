// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb_mud8G8RDiZdr2jtOPGeh7amiz2O7OE",
  authDomain: "netflix-ai-gpt-e867b.firebaseapp.com",
  projectId: "netflix-ai-gpt-e867b",
  storageBucket: "netflix-ai-gpt-e867b.appspot.com",
  messagingSenderId: "972875504301",
  appId: "1:972875504301:web:86bc7660e158ad9bfb0424",
  measurementId: "G-S9CW57RHQY" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();