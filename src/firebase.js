import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV-OUYlIMVepJ_w2aOvngtPvyA8efebo8",
  authDomain: "civiq-87a5c.firebaseapp.com",
  projectId: "civiq-87a5c",
  storageBucket: "civiq-87a5c.firebasestorage.app",
  messagingSenderId: "797041812890",
  appId: "1:797041812890:web:484c3bbd6889ea44670623",
  measurementId: "G-XD50MT68CB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
