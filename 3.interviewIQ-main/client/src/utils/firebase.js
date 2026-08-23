import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interview-agent-3f956.firebaseapp.com",
  projectId: "ai-interview-agent-3f956",
  storageBucket: "ai-interview-agent-3f956.firebasestorage.app",
  messagingSenderId: "139612188107",
  appId: "1:139612188107:web:5aa8e72234414946a7da4e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
