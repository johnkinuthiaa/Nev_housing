
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "nevani.firebaseapp.com",
    projectId: "nevani",
    storageBucket: "nevani.firebasestorage.app",
    messagingSenderId: "92360793696",
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
export const provider =new GoogleAuthProvider()