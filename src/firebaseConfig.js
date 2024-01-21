// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTlPNzt6J6fOwEAp7q8RoFoVM0muYnR1U",
  authDomain: "mygame-2667c.firebaseapp.com",
  projectId: "mygame-2667c",
  storageBucket: "mygame-2667c.appspot.com",
  messagingSenderId: "282949626032",
  appId: "1:282949626032:web:dab685401ebece52f3f375"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
