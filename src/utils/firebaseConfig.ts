import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyH01U3gtfqouhhh8P34XO0-DTLBd4kxA",
  authDomain: "fir-auth-25a6f.firebaseapp.com",
  projectId: "fir-auth-25a6f",
  storageBucket: "fir-auth-25a6f.firebasestorage.app",
  messagingSenderId: "342579694954",
  appId: "1:342579694954:web:d8483cd4e78a000770a913",
  measurementId: "G-W5K9SMNBZ8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
