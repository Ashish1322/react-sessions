// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBToskTrFFBdtVk-LJVgXzXYfJmH0TQSas",
  authDomain: "chat-57556.firebaseapp.com",
  projectId: "chat-57556",
  storageBucket: "chat-57556.firebasestorage.app",
  messagingSenderId: "96692174709",
  appId: "1:96692174709:web:b29413b93afa241a011d3c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
