
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAYjFT1LANOubTiHfu2gMs4flev5bFn5lU",
  authDomain: "interviewiq-1341b.firebaseapp.com",
  projectId: "interviewiq-1341b",
  storageBucket: "interviewiq-1341b.firebasestorage.app",
  messagingSenderId: "1076093157416",
  appId: "1:1076093157416:web:f0fa9fba90c92c5bacf51d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}