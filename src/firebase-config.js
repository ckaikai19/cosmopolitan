import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp5P8sl3lQDeBoeXaGobzWl1suLMpx6QA",
  authDomain: "cosmopolitan-95a72.firebaseapp.com",
  projectId: "cosmopolitan-95a72",
  storageBucket: "cosmopolitan-95a72.appspot.com",
  messagingSenderId: "956524840183",
  appId: "1:956524840183:web:0a2307821b186a029f3ff2",
  measurementId: "G-Y5F8PB4TV8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
