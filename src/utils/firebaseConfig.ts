import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmsU6jG8_5HQpsKpQ6xHIFtTzpwCknrOs",
  authDomain: "fist-porject-3b74a.firebaseapp.com",
  projectId: "fist-porject-3b74a",
  storageBucket: "fist-porject-3b74a.firebasestorage.app",
  messagingSenderId: "585108414687",
  appId: "1:585108414687:web:1e2c5f892ff4f08b4f896a",
  measurementId: "G-TN3PRLBB0F",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
