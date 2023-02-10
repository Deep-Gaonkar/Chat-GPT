import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTaKi0sN2ONU22YcAeb1Xiz9pcKfyBEcI",
  authDomain: "chat-gpt-d4128.firebaseapp.com",
  projectId: "chat-gpt-d4128",
  storageBucket: "chat-gpt-d4128.appspot.com",
  messagingSenderId: "399352132608",
  appId: "1:399352132608:web:ef0322c8acdec42d5814e5",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
